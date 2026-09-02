import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneShell, GlassCard } from "@/components/travel/PhoneShell";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = { redirect_url?: string; redirect_to?: string } | null;
type AuthorizationDetails = {
  client?: { name?: string; client_id?: string; redirect_uri?: string } | null;
  scope?: string | null;
  redirect_url?: string;
  redirect_to?: string;
} | null;

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthResult; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthResult; error: { message: string } | null }>;
};

const oauthApi = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  // Browser-only: the session lives in localStorage, which SSR cannot read.
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s['authorization_id'] === "string" ? (s['authorization_id'] as string) : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      const next = location.pathname + location.searchStr;
      throw redirect({ to: "/auth", search: { next } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.searchStr).get("authorization_id")!;
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <PhoneShell title="Connect" subtitle="Authorization">
      <GlassCard>
        <p className="text-[14px]">
          Could not load this authorization request: {String((error as Error)?.message ?? error)}
        </p>
      </GlassCard>
    </PhoneShell>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "this app";
  const scopes = (details?.scope ?? "").split(" ").filter(Boolean);

  const decide = async (approve: boolean): Promise<void> => {
    setBusy(true);
    setError(null);
    const { data, error: err } = approve
      ? await oauthApi().approveAuthorization(authorization_id)
      : await oauthApi().denyAuthorization(authorization_id);
    if (err) {
      setBusy(false);
      setError(err.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  };

  return (
    <PhoneShell title="Connect" subtitle="Authorize an assistant">
      <GlassCard className="space-y-3">
        <h1 className="text-[18px] font-semibold">Connect {clientName} to TravelMate</h1>
        <p className="text-[13px] text-muted-foreground">
          {clientName} will be able to use TravelMate's tools as you — searching flights and
          reading or changing your saved trips.
        </p>
        {details?.client?.redirect_uri ? (
          <p className="text-[12px] text-muted-foreground break-all">
            Redirects to {details.client.redirect_uri}
          </p>
        ) : null}
        {scopes.length ? (
          <ul className="space-y-1 text-[13px]">
            {scopes.map((s) => (
              <li key={s}>
                {s === "email"
                  ? "Share your email address"
                  : s === "profile" || s === "openid"
                    ? "Share your basic profile"
                    : `Additional permission requested: ${s}`}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="text-[12px] text-muted-foreground">
          This does not bypass TravelMate's permissions — your data stays scoped to your account.
        </p>
        {error ? (
          <p role="alert" className="text-[13px] text-destructive">
            {error}
          </p>
        ) : null}
        <Button
          disabled={busy}
          onClick={() => decide(true)}
          className="gradient-primary tap h-12 w-full rounded-xl text-[15px] font-semibold text-primary-foreground"
        >
          Approve
        </Button>
        <Button
          disabled={busy}
          variant="outline"
          onClick={() => decide(false)}
          className="tap h-11 w-full rounded-xl"
        >
          Cancel connection
        </Button>
      </GlassCard>
    </PhoneShell>
  );
}
