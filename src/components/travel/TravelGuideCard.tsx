import { CalendarClock, Hotel, Lightbulb, MapPin, Plane, Route } from "lucide-react";
import { GlassCard } from "./PhoneShell";
import type { TravelGuide } from "@/lib/travel-guides";

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-muted/70 p-3">
      <p className="mb-2 flex items-center gap-2 text-[13px] font-semibold">
        <Icon className="h-4 w-4 text-primary" /> {title}
      </p>
      {children}
    </div>
  );
}

export function TravelGuideCard({ guide }: { guide: TravelGuide }) {
  return (
    <GlassCard className="space-y-3">
      <div>
        <p className="text-[18px] font-bold">{guide.place}</p>
        <p className="text-[12px] text-subtle">
          {guide.kind === "country" ? "Country guide" : `City guide · ${guide.country}`} · {guide.currency}
        </p>
        <p className="mt-2 text-[13px] text-muted-foreground">{guide.summary}</p>
      </div>

      <Block icon={MapPin} title="Top attractions">
        <ul className="space-y-1 text-[13px]">
          {guide.attractions.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </ul>
      </Block>

      <Block icon={Hotel} title="Popular hotels & stays">
        <div className="space-y-2">
          {guide.hotels.map((h) => (
            <div key={h.name} className="flex items-center justify-between text-[13px]">
              <span>
                {h.name}
                <span className="block text-[12px] text-subtle">{h.area}</span>
              </span>
              <span className="font-semibold text-primary">${h.price}/night</span>
            </div>
          ))}
        </div>
      </Block>

      <Block icon={Route} title="Recommended itinerary">
        <div className="space-y-1.5 text-[13px]">
          {guide.itinerary.map((i) => (
            <p key={i.day}>
              <span className="font-semibold">{i.day}:</span> {i.plan}
            </p>
          ))}
        </div>
      </Block>

      <Block icon={CalendarClock} title="Best time to visit">
        <p className="text-[13px]">{guide.bestTime}</p>
      </Block>

      <Block icon={Plane} title="Flight options & pricing">
        <div className="space-y-2">
          {guide.flights.map((f) => (
            <div key={f.from} className="flex items-center justify-between text-[13px]">
              <span>
                {f.from} → {f.airport}
                <span className="block text-[12px] text-subtle">{f.duration}</span>
              </span>
              <span className="font-semibold text-primary">from ${f.price}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block icon={Lightbulb} title="Local travel tips">
        <ul className="space-y-1 text-[13px]">
          {guide.tips.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      </Block>
    </GlassCard>
  );
}
