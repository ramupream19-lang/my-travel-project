import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Download, Plane, Hotel, Car } from "lucide-react";
import { toast } from "sonner";
import { PhoneShell, GlassCard, SectionTitle } from "@/components/travel/PhoneShell";
import { BOOKINGS, type BookingRecord } from "@/lib/travel-data";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "TravelMate — My Bookings" },
      { name: "description", content: "Track your flights, hotels and car rentals with the booking reference tracer." },
      { property: "og:title", content: "TravelMate — My Bookings" },
      { property: "og:description", content: "Track your flights, hotels and car rentals with the booking reference tracer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingsPage,
});

const ICONS = {
  flight: Plane,
  hotel: Hotel,
  car: Car,
};

function BookingCard({ b }: { b: BookingRecord }) {
  const Icon = ICONS[b.kind];
  return (
    <GlassCard className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold">{b.title}</p>
          <p className="text-[12px] text-subtle">
            {b.ref} · {b.when}
          </p>
        </div>
        <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
          {b.status}
        </span>
      </div>

      {b.sections.map((sec, i) => (
        <div key={i} className="rounded-xl bg-muted/70 p-3">
          <p className="mb-1 text-[13px] font-semibold">{sec.heading}</p>
          <ul className="space-y-1 text-[12px] text-muted-foreground">
            {sec.rows.map((r, j) => (
              <li key={j} className="flex justify-between gap-2">
                <span className="text-subtle">{r.label}</span>
                <span className="text-right text-foreground">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-wrap gap-2">
        {b.actions.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => toast(a)}
            className="tap rounded-lg border border-glass-border bg-secondary px-3 py-1.5 text-[12px] font-medium text-primary"
          >
            {a}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-2">
        <p className="text-[18px] font-bold text-primary">${b.total.toLocaleString()}</p>
        <button
          type="button"
          className="tap flex items-center gap-1 text-[13px] font-semibold text-primary"
          onClick={() => toast.success(`Downloaded ${b.ref}`)}
        >
          <Download className="h-4 w-4" /> Download
        </button>
      </div>
    </GlassCard>
  );
}

function BookingsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"Upcoming" | "Current Trip" | "Past">("Upcoming");

  const matches = useMemo(
    () =>
      BOOKINGS.filter(
        (b) => b.timeline === filter && (query ? b.ref.toLowerCase().includes(query.toLowerCase()) : true),
      ),
    [filter, query],
  );

  return (
    <PhoneShell title="My Bookings" subtitle="Track flights, stays and cars">
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Reference number"
              className="h-11 w-full rounded-xl border border-input bg-card/80 pl-9 pr-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
            />
          </div>
          <button
            type="button"
            className="gradient-primary tap h-11 rounded-xl px-4 text-[13px] font-semibold text-primary-foreground"
            onClick={() => {
              const found = BOOKINGS.find((b) => b.ref.toLowerCase() === query.toLowerCase());
              if (found) toast.success(`Found ${found.title}`);
              else toast.error("No booking found");
            }}
          >
            Search
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {(["Upcoming", "Current Trip", "Past"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`tap shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold ${
                filter === t ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <SectionTitle>{matches.length} bookings</SectionTitle>

        {matches.map((b) => (
          <BookingCard key={b.ref} b={b} />
        ))}

        {!matches.length ? (
          <GlassCard className="text-center text-[13px] text-muted-foreground">
            No bookings in this category.
          </GlassCard>
        ) : null}
      </div>
    </PhoneShell>
  );
}
