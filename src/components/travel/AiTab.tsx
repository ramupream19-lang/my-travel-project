import { useState } from "react";
import { Send } from "lucide-react";
import { GlassCard } from "./PhoneShell";
import { TravelGuideCard } from "./TravelGuideCard";
import { getTravelGuide, type TravelGuide } from "@/lib/travel-guides";
import { AIRPORTS, DESTINATIONS, STAYS, CARS, type Destination } from "@/lib/travel-data";

type Msg = { role: "user" | "ai"; text: string; picks?: Destination[]; guide?: TravelGuide };

const SUGGESTIONS = [
  "India",
  "Popular travel plans in Japan",
  "Things to do in Mumbai",
  "Show me beach destinations under $1000 for 5 days",
];

/** Find a country or city name mentioned anywhere in the query. */
function detectPlace(query: string): string | null {
  const q = query.toLowerCase();
  const names = new Set<string>();
  for (const a of AIRPORTS) {
    names.add(a.city.toLowerCase());
    names.add(a.country.toLowerCase());
  }
  for (const d of DESTINATIONS) {
    names.add(d.name.toLowerCase());
    names.add(d.country.toLowerCase());
  }
  let best: string | null = null;
  for (const n of names) {
    if (n.length < 3) continue;
    if (q === n || q.includes(n)) {
      if (!best || n.length > best.length) best = n;
    }
  }
  return best;
}

function answer(query: string): Msg {
  const q = query.toLowerCase();
  const budgetMatch = q.match(/\$?\s?(\d{3,5})/);
  const budget = budgetMatch?.[1] ? Number(budgetMatch[1]) : undefined;

  // Country / city question → full travel guide for that place.
  const place = detectPlace(query);
  if (place) {
    const guide = getTravelGuide(place);
    if (guide) {
      return {
        role: "ai",
        text: `Here are the most popular travel plans for ${guide.place} — top attractions, where to stay, a ready-made itinerary, best time to visit, flight pricing and local tips.`,
        guide,
      };
    }
  }

  let picks = DESTINATIONS.slice();
  if (budget) picks = picks.filter((d) => d.price <= budget);
  const styleHints: [string, string][] = [
    ["beach", "Beach & Relaxation"],
    ["relax", "Beach & Relaxation"],
    ["food", "Great Food & Cuisine"],
    ["eat", "Great Food & Cuisine"],
    ["adventure", "Outdoor Adventures"],
    ["hike", "Outdoor Adventures"],
    ["culture", "Art & Culture"],
    ["art", "Art & Culture"],
    ["nightlife", "Nightlife & Entertainment"],
    ["party", "Nightlife & Entertainment"],
    ["underrated", "Underrated Destinations"],
    ["hidden", "Underrated Destinations"],
  ];
  const wanted = styleHints.filter(([k]) => q.includes(k)).map(([, s]) => s);
  if (wanted.length) picks = picks.filter((d) => wanted.some((w) => d.styles.includes(w as never)));

  const regions = ["asia", "africa", "europe", "oceania", "north america", "south america"];
  const region = regions.find((r) => q.includes(r));
  if (region) picks = picks.filter((d) => d.region.toLowerCase() === region);

  if (q.includes("family") || q.includes("kids")) picks = picks.filter((d) => d.rating >= 4.6);

  picks = picks.sort((a, b) => a.price - b.price).slice(0, 3);

  if (picks.length === 0) {
    return {
      role: "ai",
      text: "I couldn't match that exactly. Try widening your budget or dropping the region — for example \"beach trips under $900\".",
    };
  }

  const cheapestStay = [...STAYS].sort((a, b) => a.price - b.price)[0]!;
  const cheapestCar = [...CARS].sort((a, b) => a.rate - b.rate)[0]!;

  return {
    role: "ai",
    text: `Here are ${picks.length} matches${budget ? ` under $${budget}` : ""}. Stays start at $${cheapestStay.price}/night (${cheapestStay.name}) and cars from $${cheapestCar.rate}/day (${cheapestCar.model}).`,
    picks,
  };
}

export function AiTab() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "Hi! Tell me how you want to travel — budget, vibe, region — and I'll pull flights, stays and cars that fit.",
    },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }, answer(text)]);
    setInput("");
  };

  return (
    <div className="space-y-3">
      {messages.map((m, i) => (
        <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
          <div
            className={`${
              m.role === "user"
                ? "gradient-primary max-w-[85%] rounded-[18px] px-4 py-3 text-[13px] text-primary-foreground"
                : "glass max-w-[92%] p-4 text-[13px]"
            }`}
          >
            <p>{m.text}</p>
            {m.picks ? (
              <div className="mt-3 space-y-2">
                {m.picks.map((p) => (
                  <div key={p.id} className="rounded-xl bg-muted/70 p-3">
                    <p className="text-[15px] font-semibold">
                      {p.emoji} {p.name}, {p.country}
                    </p>
                    <p className="text-[12px] text-subtle">
                      from ${p.price} · ⭐ {p.rating} · {p.styles[0]}
                    </p>
                    <p className="mt-1 text-[12px] text-muted-foreground">
                      Best time {p.bestTime} · {p.weather}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}

      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="tap rounded-full bg-card/70 px-3 py-1.5 text-left text-[12px] font-medium text-primary backdrop-blur-sm"
          >
            {s}
          </button>
        ))}
      </div>

      <GlassCard className="flex items-center gap-2 p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Ask anything about your trip…"
          className="h-11 flex-1 rounded-xl border border-input bg-card/80 px-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
        />
        <button
          type="button"
          onClick={() => send(input)}
          className="gradient-primary tap flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </GlassCard>
    </div>
  );
}
