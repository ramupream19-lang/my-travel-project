import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { GlassCard } from "./PhoneShell";
import { CARS } from "@/lib/travel-data";

const TYPES = ["Economy", "Sedan", "SUV", "Luxury", "Van", "Truck"];
const INSURANCE = ["No Insurance", "Basic", "Premium", "Full Coverage"];
const MILEAGE = ["Limited", "Unlimited"];
const TRANSMISSION = ["Manual", "Automatic"];

const DOCS = [
  "Valid driving license",
  "International Driving Permit (IDP) — if applicable",
  "Credit card for rental charges",
  "Passport or Government ID",
  "Proof of car insurance (optional)",
  "Minimum age verification (usually 25+)",
];

function Chips({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div>
      <p className="mb-2 text-[13px] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(value === o ? "" : o)}
            className={`tap rounded-full px-3 py-1.5 text-[12px] font-medium ${
              value === o ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CarsTab() {
  const [pickup, setPickup] = useState("Bali International Airport");
  const [dropoff, setDropoff] = useState("");
  const [pickupAt, setPickupAt] = useState("");
  const [dropoffAt, setDropoffAt] = useState("");
  const [age, setAge] = useState(30);
  const [type, setType] = useState("");
  const [insurance, setInsurance] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [maxRate, setMaxRate] = useState(200);

  const results = useMemo(
    () =>
      CARS.filter(
        (c) =>
          c.rate <= maxRate &&
          (type ? c.type === type : true) &&
          (insurance ? c.insurance === insurance : true) &&
          (mileage ? c.mileage === mileage : true) &&
          (transmission ? c.transmission === transmission : true),
      ),
    [maxRate, type, insurance, mileage, transmission],
  );

  const input =
    "h-11 w-full rounded-xl border border-input bg-card/80 px-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10";

  return (
    <div className="space-y-3">
      <GlassCard className="space-y-3">
        <div>
          <label className="mb-1 block text-[13px] text-muted-foreground">Pickup location</label>
          <input className={input} value={pickup} onChange={(e) => setPickup(e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block text-[13px] text-muted-foreground">Dropoff location (optional)</label>
          <input className={input} value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Pickup date & time</label>
            <input type="datetime-local" className={input} value={pickupAt} onChange={(e) => setPickupAt(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Dropoff date & time</label>
            <input type="datetime-local" className={input} value={dropoffAt} onChange={(e) => setDropoffAt(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-[13px] text-muted-foreground">Driver age</label>
          <input type="number" min={18} className={input} value={age} onChange={(e) => setAge(Number(e.target.value))} />
          {age < 25 ? (
            <p className="mt-1 text-[12px] text-warning">
              Most suppliers require drivers to be 25+. A young-driver fee may apply.
            </p>
          ) : null}
        </div>
      </GlassCard>

      <GlassCard className="space-y-4">
        <p className="text-[16px] font-semibold">Filters</p>
        <Chips label="Car type" options={TYPES} value={type} onChange={setType} />
        <div>
          <p className="text-[13px] text-muted-foreground">Daily rate: up to ${maxRate}</p>
          <Slider aria-label="Maximum daily rental rate" min={20} max={200} step={5} value={[maxRate]} onValueChange={(v) => setMaxRate(v[0] ?? 200)} className="my-2" />
        </div>
        <Chips label="Insurance" options={INSURANCE} value={insurance} onChange={setInsurance} />
        <Chips label="Mileage limit" options={MILEAGE} value={mileage} onChange={setMileage} />
        <Chips label="Transmission" options={TRANSMISSION} value={transmission} onChange={setTransmission} />
      </GlassCard>

      <GlassCard className="py-3 text-[13px] font-semibold">{results.length} cars found</GlassCard>

      {results.map((c) => (
        <GlassCard key={c.id} hover className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-20 items-center justify-center rounded-xl bg-muted text-3xl">{c.emoji}</div>
            <div>
              <p className="text-[15px] font-semibold">{c.model}</p>
              <p className="text-[12px] text-subtle">
                {c.type} · {c.transmission} · {c.seats} seats
              </p>
            </div>
          </div>
          <p className="text-[13px] text-muted-foreground">
            Mileage: {c.mileage} · Insurance: {c.insurance}
            {c.insuranceCost ? ` (+$${c.insuranceCost}/day)` : ""}
          </p>
          <p className="text-[12px] text-subtle">{c.cancellation}</p>
          <div className="flex items-end justify-between border-t border-border pt-2">
            <div>
              <p className="text-[18px] font-bold text-primary">${c.rate}</p>
              <p className="text-[12px] text-subtle">per day</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="tap h-11 rounded-xl border border-glass-border bg-secondary px-3 text-[13px] font-semibold text-primary"
                onClick={() => toast(c.model, { description: `${c.type} · ${c.mileage} mileage · ${c.cancellation}` })}
              >
                Details
              </button>
              <button
                type="button"
                className="gradient-primary tap h-11 rounded-xl px-4 text-[13px] font-semibold text-primary-foreground"
                onClick={() => toast.success(`Reserved ${c.model} at ${pickup}`)}
              >
                Rent Now
              </button>
            </div>
          </div>
        </GlassCard>
      ))}

      <GlassCard>
        <p className="text-[16px] font-semibold">📋 Documents needed</p>
        <ul className="mt-2 space-y-1 text-[13px]">
          {DOCS.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="text-success">✓</span>
              {d}
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
