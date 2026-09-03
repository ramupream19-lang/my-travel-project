import { createFileRoute } from "@tanstack/react-router";

import { createTanStackOAuthProtectedResourceMetadataHandler } from "@lovable.dev/mcp-js/stacks/tanstack";

import mcp from "../../lib/mcp/index";

export const Route = createFileRoute("/.well-known/oauth-protected-resource")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      ANY: createTanStackOAuthProtectedResourceMetadataHandler(mcp, {
        resourcePath: "/mcp",
        metadataPath: "/.well-known/oauth-protected-resource",
        // Trusting X-Forwarded-Host is safe on Lovable hosting only (its proxy
        // overwrites the header); remove both options behind other proxies.
        trustForwardedHost: true,
        forwardedHostTrustedByPlatform: true,
      }),
    },
  },
});
