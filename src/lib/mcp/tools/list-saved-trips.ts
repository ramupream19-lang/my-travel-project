import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_saved_trips",
  title: "List saved trips",
  description: "List the signed-in traveller's saved TravelMate trips.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_input, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("saved_trips")
      .select("id, origin, destination, depart_date, return_date, passengers, notes, created_at")
      .order("created_at", { ascending: false });
    if (error)
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { trips: data ?? [] },
    };
  },
});
