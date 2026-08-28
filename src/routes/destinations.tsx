import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";
import { PhoneShell, GlassCard, SectionTitle } from "@/components/travel/PhoneShell";
import { DESTINATIONS, REGIONS, TRIP_STYLES, type Region, type TripStyle } from "@/lib/travel-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "TravelMate — Popular Destinations" },
      { name: "description", content: "Explore top-rated destinations, compare prices and find your perfect trip style." },
      { property: "og:title", content: "TravelMate — Popular Destinations" },
      { property: "og:description", content: "Explore top-rated destinations, compare prices and find your perfect trip style." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"price" | "popularity" | "rating" | "trending">("price");
  const [style, setStyle] = useState<TripStyle | "">("");
  const [region, setRegion] = useState<Region>("Everywhere");
  const [minRating, setMinRating] = useState(0);

  const results = useMemo(() => {
    let list = DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) &&
        (region === "Everywhere" || d.region === region) &&
        d.rating >= minRating &&
        (style ? d.styles.includes(style) : true),
    );
    if (sort === "price") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "popularity") list = [...list].sort((a, b) => b.reviews - a.reviews);
    if (sort === "trending") list = [...list].sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
    return list;
  }, [search, sort, style, region, minRating]);

  return (
    <PhoneShell title="Explore" subtitle="Popular destinations and trip styles">
      <div className="space-y-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search destination"
          className="h-11 w-full rounded-xl border border-input bg-card/80 px-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
        />

        <GlassCard className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as never)}
              className="rounded-lg border border-input bg-card/80 px-2 py-1 text-[12px]"
            >
              <option value="price">Price: Low–High</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Best Rated</option>
              <option value="trending">Trending</option>
            </select>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="rounded-lg border border-input bg-card/80 px-2 py-1 text-[12px]"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value as TripStyle | "")}
              className="rounded-lg border border-input bg-card/80 px-2 py-1 text-[12px]"
            >
              <option value="">All styles</option>
              {TRIP_STYLES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[13px] text-muted-foreground">Min rating: {minRating}⭐</p>
            <input
              type="range"
              min={0}
              max={5}
              step={0.5}
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </GlassCard>

        <SectionTitle>{results.length} destinations</SectionTitle>

        {results.map((d) => (
          <GlassCard key={d.id} hover className="space-y-2">
            <div className="flex h-32 items-center justify-center rounded-xl bg-muted text-5xl">{d.emoji}</div>
            <p className="text-[18px] font-bold">{d.name}</p>
            <p className="text-[13px] text-subtle">{d.country}</p>
            <p className="text-[13px]">
              {"⭐".repeat(Math.floor(d.rating))}{" "}
              <span className="text-muted-foreground">
                ({d.reviews} reviews)
              </span>
            </p>
            <p className="text-[18px] font-bold text-primary">from ${d.price}</p>
            <p className="text-[12px] text-muted-foreground">
              Best time: {d.besTime} · {d.weather}
            </p>
            <p className="text-[12px] text-muted-foreground">Currency: {d.currency}</p>
            <p className="text-[13px] leading-relaxed text-foreground/80">{d.description}</p>
            <div className="flex flex-wrap gap-1">
              {d.styles.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                className="gradient-primary tap flex h-11 flex-1 items-center justify-center gap-1 rounded-xl text-[15px] font-semibold text-primary-foreground"
                onClick={() => toast(`Exploring ${d.name}`)}
              >
                Explore <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="tap flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-secondary text-primary"
                onClick={() => toast.success(`Saved ${d.name} to wishlist`)}
                aria-label="Save"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="tap flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-secondary text-primary"
                onClick={() => toast(`Shared ${d.name}`)}
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </PhoneShell>
  );
}
