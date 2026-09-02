import { auth, defineMcp } from "@lovable.dev/mcp-js";
import searchFlights from "./tools/search-flights";
import destinationGuide from "./tools/destination-guide";
import listSavedTrips from "./tools/list-saved-trips";
import saveTrip from "./tools/save-trip";
import deleteSavedTrip from "./tools/delete-saved-trip";

// The OAuth issuer must be the direct Supabase host; the project ref is inlined
// at build time and survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "glassy-getaways",
  title: "Glassy Getaways",
  version: "0.1.0",
  instructions:
    "Tools for TravelMate. Use `search_flights` for routes and fares, `destination_guide` for country/city travel plans, and `list_saved_trips` / `save_trip` / `delete_saved_trip` to manage the signed-in traveller's saved trips.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [searchFlights, destinationGuide, listSavedTrips, saveTrip, deleteSavedTrip],
});
