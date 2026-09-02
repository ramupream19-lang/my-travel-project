import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { searchAirports, generateFlights } from "@/lib/travel-data";

export default defineTool({
  name: "search_flights",
  title: "Search flights",
  description:
    "Search TravelMate flight options between two cities, airports or IATA codes. Returns airline, times, stops and price.",
  inputSchema: {
    from: z.string().min(2).describe("Origin city, country or IATA code, e.g. 'Mumbai' or 'BOM'."),
    to: z.string().min(2).describe("Destination city, country or IATA code, e.g. 'Dubai' or 'DXB'."),
    maxPrice: z.number().positive().optional().describe("Optional maximum fare per adult, in USD."),
    directOnly: z.boolean().optional().describe("Only return non-stop flights."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ from, to, maxPrice, directOnly }) => {
    const origin = searchAirports(from, 1)[0];
    const destination = searchAirports(to, 1)[0];
    if (!origin || !destination) {
      return {
        content: [{ type: "text" as const, text: `No airport matched ${!origin ? from : to}.` }],
        isError: true,
      };
    }
    let flights = generateFlights(origin.code, destination.code);
    if (directOnly) flights = flights.filter((f) => f.stops === 0);
    if (maxPrice) flights = flights.filter((f) => f.price <= maxPrice);
    flights = [...flights].sort((a, b) => a.price - b.price).slice(0, 8);

    const route = {
      from: { code: origin.code, city: origin.city, country: origin.country },
      to: { code: destination.code, city: destination.city, country: destination.country },
      domestic: origin.country === destination.country,
      flights: flights.map((f) => ({
        airline: f.airline,
        flightNumber: f.flightNumber,
        depart: f.depart,
        arrive: f.arrive,
        duration: f.duration,
        stops: f.stops,
        price: f.price,
        refundable: f.refundable,
      })),
    };

    return {
      content: [{ type: "text" as const, text: JSON.stringify(route, null, 2) }],
      structuredContent: route,
    };
  },
});
