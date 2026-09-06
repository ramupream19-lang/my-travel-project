import { searchAirports, generateFlights, type Flight } from "@/lib/travel-data";

export type FlightRouteQuery = {
  from: string;
  to: string;
  maxPrice?: number;
  directOnly?: boolean;
  limit?: number;
};

export type FlightRoute = {
  from: { code: string; city: string; country: string };
  to: { code: string; city: string; country: string };
  domestic: boolean;
  flights: Flight[];
};

/**
 * Single source of truth for flight availability and pricing.
 * The MCP `search_flights` tool and the app's own flight search both call this,
 * so quoted fares always match the fare the traveller pays at checkout.
 */
export function searchFlightRoute(query: FlightRouteQuery): FlightRoute | { error: string } {
  const origin = searchAirports(query.from, 1)[0];
  const destination = searchAirports(query.to, 1)[0];
  if (!origin) return { error: `No airport matched ${query.from}.` };
  if (!destination) return { error: `No airport matched ${query.to}.` };

  let flights = generateFlights(origin.code, destination.code);
  if (query.directOnly) flights = flights.filter((f) => f.stops === 0);
  if (query.maxPrice) flights = flights.filter((f) => f.price <= query.maxPrice!);
  flights = [...flights].sort((a, b) => a.price - b.price);
  if (query.limit) flights = flights.slice(0, query.limit);

  return {
    from: { code: origin.code, city: origin.city, country: origin.country },
    to: { code: destination.code, city: destination.city, country: destination.country },
    domestic: origin.country === destination.country,
    flights,
  };
}
