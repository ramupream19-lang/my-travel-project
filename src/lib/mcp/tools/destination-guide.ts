import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getTravelGuide } from "@/lib/travel-guides";

export default defineTool({
  name: "destination_guide",
  title: "Destination guide",
  description:
    "Get TravelMate's travel guide for a country or city: top attractions, hotels, itinerary, best time to visit, tips and indicative flight pricing.",
  inputSchema: {
    place: z.string().min(2).describe("Country or city name, e.g. 'India' or 'Mumbai'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ place }) => {
    const guide = getTravelGuide(place);
    if (!guide) {
      return {
        content: [{ type: "text" as const, text: `No guide available for ${place}.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text" as const, text: JSON.stringify(guide, null, 2) }],
      structuredContent: guide as unknown as Record<string, unknown>,
    };
  },
});
