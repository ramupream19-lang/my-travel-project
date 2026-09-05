import { Link } from "@tanstack/react-router";
import { Plane, Compass, Ticket, HelpCircle, BatteryFull, Signal, Wifi } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Search", icon: Plane },
  { to: "/destinations", label: "Explore", icon: Compass },
  { to: "/bookings", label: "Bookings", icon: Ticket },
  { to: "/faq", label: "Help", icon: HelpCircle },
] as const;

function StatusBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
      );
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-20 flex h-11 items-center justify-between px-6 pt-1 text-[12px] font-semibold text-primary-foreground">
      <span suppressHydrationWarning>{time || "--:--"}</span>
      <span className="absolute left-1/2 top-0 hidden h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-foreground/80 sm:block" />
      <span className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5" aria-label="Mobile data" />
        <Wifi className="h-3.5 w-3.5" aria-label="Wi-Fi" />
        <BatteryFull className="h-4 w-4" aria-label="Battery" />
      </span>
    </div>
  );
}

export function PhoneShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="canvas-gradient flex min-h-[100dvh] items-center justify-center sm:p-6">
      <div className="relative h-[100dvh] w-full overflow-hidden bg-background/10 sm:h-[812px] sm:w-[380px] sm:rounded-[3rem] sm:border-8 sm:border-foreground/80 sm:shadow-2xl">
        <div className="canvas-gradient absolute inset-0" />

        {/* notch / status bar */}
        <StatusBar />


        <header className="relative z-10 px-3 pb-2 pt-1">
          <h1 className="text-[28px] font-bold leading-tight text-primary-foreground">{title}</h1>
          {subtitle ? (
            <p className="text-[13px] text-primary-foreground/80">{subtitle}</p>
          ) : null}
        </header>

        <main className="no-scrollbar relative z-10 h-[calc(100%-8.5rem)] overflow-y-auto px-3 pb-28">
          {children}
        </main>

        <nav className="glass absolute inset-x-2 bottom-2 z-30 flex h-[60px] items-center justify-around rounded-[22px] px-2 pb-1">
          {NAV.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="tap flex w-16 flex-col items-center gap-0.5 rounded-xl py-1 text-[11px] font-medium text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>

        <span className="absolute bottom-[3px] left-1/2 z-40 hidden h-1 w-28 -translate-x-1/2 rounded-full bg-foreground/30 sm:block" />
      </div>
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`glass p-4 ${hover ? "glass-hover" : ""} ${className}`}>{children}</div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-2 mt-4 px-1 text-[16px] font-semibold text-primary-foreground">{children}</h2>;
}
