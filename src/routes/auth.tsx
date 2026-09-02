import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PhoneShell, GlassCard } from "@/components/travel/PhoneShell";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    next: typeof s.next === "string" ? s.next : "",
  }),
  head: () => ({
    meta: [
      { title: "Sign in — TravelMate" },
      { name: "description", content: "Sign in to TravelMate to save trips and connect assistants to your account." },
      { property: "og:title", content: "Sign in — TravelMate" },
      { property: "og:description", content: "Sign in to TravelMate to save trips and connect assistants to your account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

/** Only same-origin relative paths may be used as a post-login destination. */
function safeNext(next: string): string {
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

const field =
  "h-11 w-full rounded-xl border border-input bg-card/80 px-3 text-[15px] outline-none focus:border-primary focus:ring-3 focus:ring-primary/10";

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const target = safeNext(next);

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(target);
    });
  }, [target]);

  const submit = async () => {
    if (!email.trim() || !password) {
      toast.error("Enter your email and password");
      return;
    }
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + target },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      toast.success("Check your email to confirm your account");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return toast.error(error.message);
    window.location.replace(target);
  };

  const google = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + target,
    });
    if (result.error) return toast.error("Google sign-in failed");
    if (result.redirected) return;
    window.location.replace(target);
  };

  return (
    <PhoneShell title="Account" subtitle="Sign in to TravelMate">
      <GlassCard className="space-y-3">
        <p className="text-[16px] font-semibold">
          {mode === "signin" ? "Welcome back" : "Create your account"}
        </p>
        <input
          className={field}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={field}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          disabled={busy}
          onClick={submit}
          className="gradient-primary tap h-12 w-full rounded-xl text-[15px] font-semibold text-primary-foreground"
        >
          {mode === "signin" ? "Sign in" : "Sign up"}
        </Button>
        <Button variant="outline" onClick={google} className="tap h-11 w-full rounded-xl">
          Continue with Google
        </Button>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="tap w-full text-[13px] font-semibold text-primary"
        >
          {mode === "signin" ? "New here? Create an account" : "Already have an account? Sign in"}
        </button>
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="tap w-full text-[12px] text-muted-foreground"
        >
          Back to search
        </button>
      </GlassCard>
    </PhoneShell>
  );
}
