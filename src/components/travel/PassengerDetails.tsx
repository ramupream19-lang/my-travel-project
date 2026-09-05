import { useMemo, useState } from "react";
import { ArrowLeft, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { GlassCard } from "./PhoneShell";
import { COUNTRIES, type Flight } from "@/lib/travel-data";

export type PaxCounts = { adults: number; children: number; infants: number };

type PaxForm = {
  type: "Adult" | "Child" | "Infant";
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  gender: string;
  nationality: string;
  passport: string;
};

function blankPax(type: PaxForm["type"]): PaxForm {
  return {
    type,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    passport: "",
  };
}

const field =
  "h-11 w-full rounded-xl border border-input bg-card/80 px-3 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10";
const labelCls = "mb-1 block text-[12px] text-muted-foreground";


export function PassengerDetails({
  flight,
  counts,
  total,
  international,
  onBack,
  onConfirm,
}: {
  flight: Flight;
  counts: PaxCounts;
  total: number;
  international: boolean;
  onBack: () => void;
  onConfirm: () => void;
}) {
  const initial = useMemo(() => {
    const list: PaxForm[] = [];
    for (let i = 0; i < counts.adults; i++) list.push(blankPax("Adult"));
    for (let i = 0; i < counts.children; i++) list.push(blankPax("Child"));
    for (let i = 0; i < counts.infants; i++) list.push(blankPax("Infant"));
    return list;
  }, [counts]);

  const [pax, setPax] = useState<PaxForm[]>(initial);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const update = (i: number, key: keyof PaxForm, value: string) =>
    setPax((prev) => prev.map((p, idx) => (idx === i ? { ...p, [key]: value } : p)));

  const submit = () => {
    const missing = pax.some(
      (p) =>
        !p.firstName.trim() ||
        !p.lastName.trim() ||
        !p.dob ||
        !p.gender ||
        (international && !p.passport.trim()),
    );
    if (missing) {
      toast.error("Fill in every passenger's details");
      return;
    }
    if (!email.trim() || !phone.trim()) {
      toast.error("Add a contact email and phone number");
      return;
    }
    onConfirm();
  };

  return (
    <div className="space-y-3">
      <GlassCard className="space-y-2">
        <button
          type="button"
          onClick={onBack}
          className="tap flex items-center gap-1 text-[13px] font-semibold text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to flights
        </button>
        <p className="text-[16px] font-semibold">Passenger information</p>
        <p className="text-[13px] text-muted-foreground">
          {flight.airline} {flight.flightNumber} · {flight.from} → {flight.to} · {flight.duration}
        </p>
        <p className="text-[18px] font-bold text-primary">Total ${total.toLocaleString()}</p>
      </GlassCard>

      {pax.map((p, i) => (
        <GlassCard key={i} className="space-y-2.5">
          <p className="flex items-center gap-2 text-[15px] font-semibold">
            <UserRound className="h-4 w-4 text-primary" /> {p.type} {i + 1}
            {p.firstName || p.lastName ? (
              <span className="ml-auto truncate text-[12px] font-medium text-muted-foreground">
                {[p.firstName, p.middleName, p.lastName].filter(Boolean).join(" ")}
              </span>
            ) : null}
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className={labelCls}>First name</label>
              <input
                className={field}
                placeholder="First"
                value={p.firstName}
                onChange={(e) => update(i, "firstName", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Middle name</label>
              <input
                className={field}
                placeholder="Optional"
                value={p.middleName}
                onChange={(e) => update(i, "middleName", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Last name</label>
              <input
                className={field}
                placeholder="Last"
                value={p.lastName}
                onChange={(e) => update(i, "lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelCls}>Date of birth</label>
              <input
                type="date"
                className={field}
                value={p.dob}
                onChange={(e) => update(i, "dob", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Gender</label>
              <select
                className={field}
                value={p.gender}
                onChange={(e) => update(i, "gender", e.target.value)}
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelCls}>Nationality</label>
              <select
                className={field}
                value={p.nationality}
                onChange={(e) => update(i, "nationality", e.target.value)}
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {p.nationality ? (
                <p className="mt-1 text-[12px] font-semibold text-primary">{p.nationality}</p>
              ) : null}
            </div>
            <div>
              <label className={labelCls}>
                {international ? "Passport number" : "ID number (optional)"}
              </label>
              <input
                className={field}
                placeholder={international ? "e.g. Z1234567" : "National ID"}
                value={p.passport}
                onChange={(e) => update(i, "passport", e.target.value)}
              />
            </div>
          </div>
        </GlassCard>
      ))}


      <GlassCard className="space-y-3">
        <p className="text-[15px] font-semibold">Contact details</p>
        <input
          className={field}
          type="email"
          placeholder="Email for the e-ticket"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={field}
          type="tel"
          placeholder="Mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          className="gradient-primary tap h-12 w-full rounded-xl text-[15px] font-semibold text-primary-foreground"
          onClick={submit}
        >
          Confirm passengers & continue
        </Button>
      </GlassCard>
    </div>
  );
}
