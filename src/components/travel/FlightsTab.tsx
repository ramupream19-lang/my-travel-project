import { useMemo, useState } from "react";
import { ArrowRight, Check, Filter, Plane, Search, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GlassCard } from "./PhoneShell";
import { VisaModal } from "./VisaModal";
import { TravelGuideCard } from "./TravelGuideCard";
import { getTravelGuide } from "@/lib/travel-guides";
import {
  AIRPORTS,
  REGIONS,
  TRIP_STYLES,
  customAirport,
  generateFlights,
  searchAirports,
  type Airport,
  type Region,
  type TripStyle,
} from "@/lib/travel-data";

type StopFilter = "all" | "direct" | "one";
type Sort = "price-asc" | "price-desc" | "duration" | "value";

function AirportField({
  label,
  value,
  onPick,
  placeholder,
}: {
  label: string;
  value: Airport | null;
  onPick: (a: Airport) => void;
  placeholder: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const matches = useMemo(() => (query.trim() ? searchAirports(query, 6) : []), [query]);
  const typed = query.trim();

  const choose = (a: Airport) => {
    onPick(a);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="relative">
      <label className="mb-1 block text-[13px] text-muted-foreground">{label}</label>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && typed) {
            e.preventDefault();
            choose(matches[0] ?? customAirport(typed));
          }
        }}
        placeholder={value ? `${value.city} (${value.code})` : placeholder}
        className="h-11 w-full rounded-xl border border-input bg-card/80 px-3 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
      />

      {value && !open ? (
        <p className="mt-1 flex items-center gap-1 text-[12px] text-primary">
          <Check className="h-3 w-3" /> {value.city} ({value.code}) · {value.country}
        </p>
      ) : null}

      {open && typed ? (
        <div className="absolute z-30 mt-1 w-full overflow-hidden rounded-xl border border-glass-border bg-card shadow-lg">
          <p className="border-b border-border px-3 py-2 text-[12px] text-subtle">
            {matches.length ? "Confirm the airport" : "No airport in our list — use your own"}
          </p>
          {matches.map((a) => (
            <button
              key={a.code}
              type="button"
              onClick={() => choose(a)}
              className="tap flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] hover:bg-muted"
            >
              <Plane className="h-3.5 w-3.5 text-primary" />
              <span>
                <span className="font-semibold">
                  {a.city} ({a.code})
                </span>
                <span className="block text-[12px] text-subtle">
                  {a.country} · {a.region}
                </span>
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => choose(customAirport(typed))}
            className="tap w-full border-t border-border px-3 py-2 text-left text-[13px] font-semibold text-primary hover:bg-muted"
          >
            Use “{typed}” as {label.toLowerCase()}
          </button>
        </div>
      ) : null}
    </div>
  );
}


export function FlightsTab() {
  const [origin, setOrigin] = useState<Airport | null>(AIRPORTS[0] ?? null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [intl, setIntl] = useState(true);

  const [visaOpen, setVisaOpen] = useState(false);
  const [visaCleared, setVisaCleared] = useState(false);
  const [searched, setSearched] = useState(false);

  const [showFilters, setShowFilters] = useState(true);
  const [stopFilter, setStopFilter] = useState<StopFilter>("all");
  const [budget, setBudget] = useState(2500);
  const [styles, setStyles] = useState<TripStyle[]>([]);
  const [region, setRegion] = useState<Region>("Everywhere");
  const [sort, setSort] = useState<Sort>("price-asc");

  // Infants travel on lap at 10% of the adult fare.
  const passengers = adults + children + infants * 0.1;
  const paxLabel = `${adults} adult${adults > 1 ? "s" : ""}${children ? `, ${children} child${children > 1 ? "ren" : ""}` : ""}${infants ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""}`;

  const flights = useMemo(
    () => generateFlights(origin?.code ?? "JFK", destination?.code ?? "DXB"),
    [origin, destination],
  );

  const guide = useMemo(
    () => getTravelGuide(destination?.city ?? destination?.country ?? ""),
    [destination],
  );

  const domesticRoutes = useMemo(() => {
    if (!origin) return [];
    return AIRPORTS.filter((a) => a.country === origin.country && a.code !== origin.code)
      .slice(0, 6)
      .map((a) => {
        const cheapest = [...generateFlights(origin.code, a.code)].sort(
          (x, y) => x.price - y.price,
        )[0]!;
        return { airport: a, flight: cheapest };
      });
  }, [origin]);

  const filtered = useMemo(() => {
    let list = flights.filter((f) => f.price * passengers <= budget);
    if (stopFilter === "direct") list = list.filter((f) => f.stops === 0);
    if (stopFilter === "one") list = list.filter((f) => f.stops === 1);
    if (region !== "Everywhere" && destination && destination.region !== region) list = [];
    const dur = (d: string) => parseInt(d, 10);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "duration") list = [...list].sort((a, b) => dur(a.duration) - dur(b.duration));
    if (sort === "value")
      list = [...list].sort((a, b) => a.price * (1 + a.stops) - b.price * (1 + b.stops));
    return list;
  }, [flights, budget, stopFilter, region, sort, destination, passengers]);

  const filtersActive =
    stopFilter !== "all" || budget !== 2500 || styles.length > 0 || region !== "Everywhere";

  const flightPortion = Math.round(budget * 0.45);
  const hotelPortion = Math.round((budget * 0.35) / 5);
  const transportPortion = Math.round(budget * 0.1);

  const toggleStyle = (s: TripStyle) =>
    setStyles((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <div className="space-y-3">
      <GlassCard className="space-y-3">
        <AirportField
          label="Source"
          value={origin}
          placeholder="Type a city, e.g. Chennai"
          onPick={(a: Airport) => {
            setOrigin(a);
          }}
        />
        <AirportField
          label="Destination"
          value={destination}
          placeholder="Type any city or country worldwide"
          onPick={(a: Airport) => {
            setDestination(a);
            setVisaCleared(false);
            if (!a.domestic || intl) setVisaOpen(true);
          }}
        />

        <div>
          <label className="mb-1 block text-[13px] text-muted-foreground">Travel date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-11 w-full rounded-xl border border-input bg-card/80 px-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Adults", value: adults, set: setAdults, min: 1 },
            { label: "Children", value: children, set: setChildren, min: 0 },
          ].map((c) => (
            <div key={c.label}>
              <label className="mb-1 block text-[13px] text-muted-foreground">{c.label}</label>
              <div className="flex h-11 items-center justify-between rounded-xl border border-input bg-card/80 px-3">
                <button
                  type="button"
                  className="tap text-[18px] font-semibold text-primary"
                  onClick={() => c.set(Math.max(c.min, c.value - 1))}
                >
                  −
                </button>
                <span className="text-[15px] font-semibold">{c.value}</span>
                <button
                  type="button"
                  className="tap text-[18px] font-semibold text-primary"
                  onClick={() => c.set(c.value + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex rounded-xl bg-muted p-1">
          {[
            { k: false, l: "Domestic" },
            { k: true, l: "International" },
          ].map((t) => (
            <button
              key={t.l}
              type="button"
              onClick={() => setIntl(t.k)}
              className={`tap h-9 flex-1 rounded-lg text-[13px] font-semibold ${
                intl === t.k ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {t.l}
            </button>
          ))}
        </div>

        <Button
          className="gradient-primary tap h-12 w-full rounded-xl text-[15px] font-semibold text-primary-foreground"
          onClick={() => {
            if (!destination) {
              toast.error("Pick a destination first");
              return;
            }
            if (intl && !visaCleared) {
              setVisaOpen(true);
              return;
            }
            setSearched(true);
          }}
        >
          <Search className="mr-1 h-4 w-4" /> Search flights
        </Button>
      </GlassCard>

      {/* FILTERS */}
      <GlassCard className="space-y-4">
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          className="flex w-full items-center justify-between text-[16px] font-semibold"
        >
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-primary" /> Filters
          </span>
          <span className="text-[13px] font-normal text-muted-foreground">
            {showFilters ? "Hide" : "Show"}
          </span>
        </button>

        {showFilters ? (
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[13px] text-muted-foreground">Flight type</p>
              <div className="space-y-2">
                {(
                  [
                    ["direct", "Direct Flights Only"],
                    ["one", "One Stop Flights Only"],
                    ["all", "Show All Flights"],
                  ] as [StopFilter, string][]
                ).map(([k, l]) => (
                  <label key={k} className="flex items-center gap-2 text-[13px]">
                    <Checkbox checked={stopFilter === k} onCheckedChange={() => setStopFilter(k)} />
                    {l}
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-muted/70 p-3">
              <p className="text-[13px] text-muted-foreground">Budget range: $100 – $10,000+</p>
              <Slider
                className="my-3"
                min={100}
                max={10000}
                step={50}
                value={[budget]}
                onValueChange={(v) => setBudget(v[0] ?? 2500)}
              />
              <p className="text-[15px] font-semibold">
                Current budget: ${budget.toLocaleString()}
              </p>
              <div className="mt-2 space-y-1 text-[12px] text-subtle">
                <p>Flight cost portion: ${flightPortion.toLocaleString()}</p>
                <p>Hotel estimate: ${hotelPortion}/night</p>
                <p>Local transport: ${transportPortion.toLocaleString()}</p>
                <p className="font-semibold text-foreground">
                  Total trip estimate: ${budget.toLocaleString()}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[13px] text-muted-foreground">Trip style</p>
              <div className="space-y-2">
                {TRIP_STYLES.map((s) => (
                  <label key={s} className="flex items-center gap-2 text-[13px]">
                    <Checkbox checked={styles.includes(s)} onCheckedChange={() => toggleStyle(s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[13px] text-muted-foreground">Explore regions</p>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`tap rounded-full px-3 py-1.5 text-[12px] font-medium ${
                      region === r
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {r === "Everywhere" ? "Everywhere · Global" : r}
                  </button>
                ))}
              </div>
            </div>

            {filtersActive ? (
              <Button
                variant="secondary"
                className="tap h-11 w-full rounded-xl text-[13px] font-semibold"
                onClick={() => {
                  setStopFilter("all");
                  setBudget(2500);
                  setStyles([]);
                  setRegion("Everywhere");
                }}
              >
                <X className="mr-1 h-4 w-4" /> Clear all filters
              </Button>
            ) : null}
          </div>
        ) : null}
      </GlassCard>

      {/* RESULTS */}
      <GlassCard className="flex items-center justify-between py-3">
        <p className="text-[13px] font-semibold">{filtered.length} flights found</p>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="rounded-lg border border-input bg-card/80 px-2 py-1 text-[12px]"
        >
          <option value="price-asc">Price: Low–High</option>
          <option value="price-desc">Price: High–Low</option>
          <option value="duration">Duration</option>
          <option value="value">Best Value</option>
        </select>
      </GlassCard>

      {!searched ? (
        <GlassCard className="text-center text-[13px] text-muted-foreground">
          Pick a destination and search to see live results. Filters update instantly.
        </GlassCard>
      ) : (
        filtered.map((f) => (
          <GlassCard key={f.id} hover className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[15px] font-semibold">
                <span className="text-xl">{f.logo}</span>
                {f.airline}
              </span>
              <span className="text-[12px] text-subtle">{f.flightNumber}</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-semibold">{f.depart}</p>
                <p className="text-[12px] text-subtle">{f.from}</p>
              </div>
              <div className="flex flex-col items-center text-[12px] text-muted-foreground">
                <span>{f.duration}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{f.stops === 0 ? "Direct" : f.stops === 1 ? "1 Stop" : "Multiple Stops"}</span>
              </div>
              <div className="text-right">
                <p className="text-[16px] font-semibold">{f.arrive}</p>
                <p className="text-[12px] text-subtle">{f.to}</p>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-border pt-2">
              <div>
                <p className="text-[12px] text-subtle">${f.price} per passenger</p>
                <p className="text-[18px] font-bold text-primary">
                  ${(f.price * passengers).toLocaleString()}
                </p>
                <p className="text-[12px] text-warning">{f.seatsLeft} seats left</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="tap h-11 rounded-xl border border-glass-border bg-secondary px-3 text-[13px] font-semibold text-primary"
                  onClick={() =>
                    toast(`${f.airline} ${f.flightNumber}`, {
                      description: `${f.aircraft} · ${f.duration} · ${f.refundable ? "Refundable" : "Non-refundable"}`,
                    })
                  }
                >
                  Details
                </button>
                <button
                  type="button"
                  className="gradient-primary tap h-11 rounded-xl px-4 text-[13px] font-semibold text-primary-foreground"
                  onClick={() => toast.success(`Booked ${f.airline} ${f.flightNumber}`)}
                >
                  Book
                </button>
              </div>
            </div>
          </GlassCard>
        ))
      )}

      <VisaModal
        airport={destination}
        open={visaOpen}
        onOpenChange={setVisaOpen}
        onConfirm={() => {
          setVisaCleared(true);
          setVisaOpen(false);
          toast.success("Travel requirements acknowledged");
        }}
      />
    </div>
  );
}
