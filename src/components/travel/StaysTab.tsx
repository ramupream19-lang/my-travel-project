import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { GlassCard } from "./PhoneShell";
import { STAYS } from "@/lib/travel-data";

const AMENITIES = ["WiFi", "Pool", "Kitchen", "Gym", "Spa", "Parking"];
const ROOM_TYPES = ["Single", "Double", "Suite", "Apartment"];

const DOCS = [
  "Valid Passport or Government ID",
  "Credit card for booking",
  "Contact information (email, phone)",
  "Travel insurance (optional but recommended)",
];

export function StaysTab() {
  const [dest, setDest] = useState("Bali");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [maxPrice, setMaxPrice] = useState(500);
  const [stars, setStars] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [roomType, setRoomType] = useState<string>("");
  const [minRating, setMinRating] = useState(0);

  const results = useMemo(
    () =>
      STAYS.filter(
        (s) =>
          s.price <= maxPrice &&
          s.stars >= stars &&
          s.rating >= minRating &&
          (roomType ? s.roomType === roomType : true) &&
          amenities.every((a) => s.amenities.includes(a)) &&
          (dest.trim() ? s.location.toLowerCase().includes(dest.trim().toLowerCase()) || dest.trim().length < 2 : true),
      ),
    [maxPrice, stars, minRating, roomType, amenities, dest],
  );

  const input =
    "h-11 w-full rounded-xl border border-input bg-card/80 px-4 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10";

  return (
    <div className="space-y-3">
      <GlassCard className="space-y-3">
        <div>
          <label className="mb-1 block text-[13px] text-muted-foreground">Destination</label>
          <input className={input} value={dest} onChange={(e) => setDest(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Check-in</label>
            <input type="date" className={input} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Check-out</label>
            <input type="date" className={input} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Guests</label>
            <input
              type="number"
              min={1}
              className={input}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="mb-1 block text-[13px] text-muted-foreground">Rooms</label>
            <input
              type="number"
              min={1}
              className={input}
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
            />
          </div>
        </div>
      </GlassCard>

      <GlassCard className="space-y-4">
        <p className="text-[16px] font-semibold">Filters</p>

        <div>
          <p className="text-[13px] text-muted-foreground">Price per night: up to ${maxPrice}</p>
          <Slider min={20} max={500} step={5} value={[maxPrice]} onValueChange={(v) => setMaxPrice(v[0] ?? 500)} className="my-2" />
        </div>

        <div>
          <p className="mb-2 text-[13px] text-muted-foreground">Star rating</p>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStars(s)}
                className={`tap rounded-full px-3 py-1.5 text-[12px] font-medium ${
                  stars === s ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {s === 0 ? "Any" : `${s}⭐`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[13px] text-muted-foreground">Amenities</p>
          <div className="grid grid-cols-2 gap-2">
            {AMENITIES.map((a) => (
              <label key={a} className="flex items-center gap-2 text-[13px]">
                <Checkbox
                  checked={amenities.includes(a)}
                  onCheckedChange={() =>
                    setAmenities((p) => (p.includes(a) ? p.filter((x) => x !== a) : [...p, a]))
                  }
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[13px] text-muted-foreground">Room type</p>
          <div className="flex flex-wrap gap-2">
            {ROOM_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setRoomType(roomType === t ? "" : t)}
                className={`tap rounded-full px-3 py-1.5 text-[12px] font-medium ${
                  roomType === t ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[13px] text-muted-foreground">Guest rating: {minRating.toFixed(1)}+</p>
          <Slider min={0} max={10} step={0.5} value={[minRating]} onValueChange={(v) => setMinRating(v[0] ?? 0)} className="my-2" />
        </div>
      </GlassCard>

      <GlassCard className="py-3 text-[13px] font-semibold">{results.length} stays found</GlassCard>

      {results.map((s) => (
        <GlassCard key={s.id} hover className="space-y-2">
          <div className="flex gap-2">
            {s.photos.map((p, i) => (
              <div
                key={i}
                className="flex h-20 flex-1 items-center justify-center rounded-xl bg-muted text-3xl"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="text-[15px] font-semibold">{s.name}</p>
          <p className="text-[12px] text-subtle">{s.location}</p>
          <p className="text-[13px]">
            {"⭐".repeat(s.stars)}{" "}
            <span className="text-muted-foreground">
              {s.rating}/10 · {s.reviews} reviews
            </span>
          </p>
          <p className="text-[12px] text-muted-foreground">{s.amenities.join(" · ")}</p>
          <div className="flex items-end justify-between border-t border-border pt-2">
            <div>
              <p className="text-[18px] font-bold text-primary">${s.price}</p>
              <p className="text-[12px] text-subtle">per night · {s.roomsLeft} rooms left</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="tap h-11 rounded-xl border border-glass-border bg-secondary px-3 text-[13px] font-semibold text-primary"
                onClick={() => toast(s.name, { description: `${s.roomType} · ${s.amenities.join(", ")}` })}
              >
                Details
              </button>
              <button
                type="button"
                className="gradient-primary tap h-11 rounded-xl px-4 text-[13px] font-semibold text-primary-foreground"
                onClick={() => toast.success(`Booked ${s.name} for ${guests} guests`)}
              >
                Book Now
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
