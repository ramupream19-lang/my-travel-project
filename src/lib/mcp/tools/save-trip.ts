import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "save_trip",
  title: "Save a trip",
  description: "Save a trip idea to the signed-in traveller's TravelMate account.",
  inputSchema: {
    origin: z.string().min(2).describe("Origin city or airport code."),
    destination: z.string().min(2).describe("Destination city or airport code."),
    departDate: z.string().optional().describe("Departure date, YYYY-MM-DD."),
    returnDate: z.string().optional().describe("Return date, YYYY-MM-DD."),
    passengers: z.number().int().min(1).max(9).optional().describe("Total passengers (default 1)."),
    notes: z.string().max(2000).optional().describe("Free-form notes about the trip."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ origin, destination, departDate, returnDate, passengers, notes }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("saved_trips")
      .insert({
        user_id: ctx.getUserId(),
        origin,
        destination,
        depart_date: departDate ?? null,
        return_date: returnDate ?? null,
        passengers: passengers ?? 1,
        notes: notes ?? null,
      })
      .select()
      .single();
    if (error)
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: { trip: data },
    };
  },
});
