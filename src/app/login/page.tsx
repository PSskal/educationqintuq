"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { SignInScreen } from "@/components/kintuq/screens-onboarding";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin() {
    if (!email || !pass) return;
    setLoading(true);
    setError(null);
    const { error } = await authClient.signIn.email({
      email,
      password: pass,
      callbackURL: "/auth/post-login",
    });
    if (error) {
      setError(traducirError(error.code));
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    setError(null);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/auth/post-login",
    });
    if (error) {
      setError("No se pudo conectar con Google. Intenta de nuevo.");
      setLoading(false);
    }
  }

  return (
    <KintuqScreen>
      <SignInScreen
        lang="es"
        mode="signin"
        inputDefaults={false}
        email={email}
        password={pass}
        onEmail={setEmail}
        onPassword={setPass}
        onSubmit={handleLogin}
        onGoogle={handleGoogle}
        onClose={() => router.push("/")}
        onSwitch={() => router.push("/signup")}
        loading={loading}
        error={error}
      />
    </KintuqScreen>
  );
}

function traducirError(code?: string): string {
  const errores: Record<string, string> = {
    INVALID_EMAIL_OR_PASSWORD: "Email o contraseña incorrectos",
    USER_NOT_FOUND: "No existe una cuenta con ese email",
    INVALID_PASSWORD: "Contraseña incorrecta",
    EMAIL_NOT_VERIFIED: "Verifica tu email antes de entrar",
    TOO_MANY_REQUESTS: "Demasiados intentos. Espera un momento",
    USER_BANNED: "Esta cuenta ha sido suspendida",
  };
  return errores[code ?? ""] ?? "Error al iniciar sesión. Intenta de nuevo.";
}
