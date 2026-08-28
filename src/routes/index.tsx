import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneShell } from "@/components/travel/PhoneShell";
import { FlightsTab } from "@/components/travel/FlightsTab";
import { StaysTab } from "@/components/travel/StaysTab";
import { CarsTab } from "@/components/travel/CarsTab";
import { AiTab } from "@/components/travel/AiTab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TravelMate — Book flights, stays & cars" },
      { name: "description", content: "Search and book flights, hotels and car rentals with an iPhone glassmorphism experience." },
      { property: "og:title", content: "TravelMate — Book flights, stays & cars" },
      { property: "og:description", content: "Search and book flights, hotels and car rentals with an iPhone glassmorphism experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <PhoneShell title="TravelMate" subtitle="Where to next?">
      <Tabs defaultValue="flights" className="w-full">
        <TabsList className="glass mb-3 grid h-12 w-full grid-cols-4 p-1">
          {[
            { k: "flights", l: "Flights" },
            { k: "stays", l: "Stays" },
            { k: "cars", l: "Cars" },
            { k: "ai", l: "AI" },
          ].map(({ k, l }) => (
            <TabsTrigger
              key={k}
              value={k}
              className="rounded-xl text-[12px] font-semibold data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
            >
              {l}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="flights">
          <FlightsTab />
        </TabsContent>
        <TabsContent value="stays">
          <StaysTab />
        </TabsContent>
        <TabsContent value="cars">
          <CarsTab />
        </TabsContent>
        <TabsContent value="ai">
          <AiTab />
        </TabsContent>
      </Tabs>

    </PhoneShell>
  );
}
