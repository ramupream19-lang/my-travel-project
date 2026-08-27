import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Airport } from "@/lib/travel-data";

const CHECKS = [
  "Passport valid for at least 6 months",
  "Visa check with the embassy — REQUIRED",
  "Check travel insurance requirements",
  "Verify vaccination requirements",
  "Travel permits (if applicable)",
];

export function VisaModal({
  airport,
  open,
  onOpenChange,
  onConfirm,
}: {
  airport: Airport | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onConfirm: () => void;
}) {
  const [acknowledged, setAcknowledged] = useState(false);

  if (!airport) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) setAcknowledged(false);
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-[340px] rounded-[20px] border-glass-border bg-popover/90 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-[16px] font-semibold">
            ⚠️ Check your travel requirements
          </DialogTitle>
        </DialogHeader>

        <p className="text-[13px] text-muted-foreground">
          Destination:{" "}
          <span className="font-semibold text-foreground">
            {airport.city}, {airport.country}
          </span>
        </p>

        <ul className="space-y-2">
          {CHECKS.map((c) => (
            <li key={c} className="flex items-start gap-2 text-[13px] text-foreground">
              <span className="mt-0.5 text-warning">☐</span>
              {c.replace("the embassy", `${airport.country} embassy`)}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2">
          <a
            href={airport.embassy}
            target="_blank"
            rel="noreferrer"
            className="tap flex h-11 items-center justify-center rounded-xl border border-glass-border bg-secondary text-[15px] font-semibold text-primary"
          >
            Visit Official Embassy Website
          </a>
          <a
            href="https://www.iatatravelcentre.com/"
            target="_blank"
            rel="noreferrer"
            className="tap flex h-11 items-center justify-center rounded-xl border border-glass-border bg-secondary text-[15px] font-semibold text-primary"
          >
            Get Travel Documents Guide
          </a>
        </div>

        <label className="flex items-center gap-2 rounded-xl bg-muted p-3 text-[13px] font-medium">
          <Checkbox
            checked={acknowledged}
            onCheckedChange={(v) => setAcknowledged(v === true)}
            aria-label="I've checked all requirements"
          />
          I&apos;ve checked all requirements
        </label>

        <Button
          disabled={!acknowledged}
          className="gradient-primary tap h-12 rounded-xl text-[15px] font-semibold text-primary-foreground disabled:opacity-50"
          onClick={() => {
            onConfirm();
            setAcknowledged(false);
          }}
        >
          Continue to booking
        </Button>
      </DialogContent>
    </Dialog>
  );
}
