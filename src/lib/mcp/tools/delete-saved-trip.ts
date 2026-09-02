import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "delete_saved_trip",
  title: "Delete a saved trip",
  description: "Delete one of the signed-in traveller's saved TravelMate trips by id.",
  inputSchema: { id: z.string().uuid().describe("The saved trip id.") },
  annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: false },
  handler: async ({ id }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text" as const, text: "Not authenticated" }], isError: true };
    const supabase = supabaseForUser(ctx);
    const { error } = await supabase.from("saved_trips").delete().eq("id", id);
    if (error)
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    return { content: [{ type: "text" as const, text: `Deleted trip ${id}` }] };
  },
});
