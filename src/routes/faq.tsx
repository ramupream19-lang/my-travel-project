import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PhoneShell, GlassCard } from "@/components/travel/PhoneShell";
import { FAQS } from "@/lib/travel-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "TravelMate — Help & FAQ" },
      { name: "description", content: "Find answers about visas, bookings, travel insurance and more." },
      { property: "og:title", content: "TravelMate — Help & FAQ" },
      { property: "og:description", content: "Find answers about visas, bookings, travel insurance and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PhoneShell title="Help" subtitle="Frequently asked questions">
      <div className="space-y-3">
        <GlassCard>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left text-[15px] font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </div>
    </PhoneShell>
  );
}
