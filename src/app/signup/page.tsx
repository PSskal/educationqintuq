"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { SignInScreen } from "@/components/kintuq/screens-onboarding";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignup() {
    if (!name || !email || !pass) return;
    if (pass.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await authClient.signUp.email({
      name,
      email,
      password: pass,
      callbackURL: "/profile/create",
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
      callbackURL: "/profile/create",
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
        mode="signup"
        inputDefaults={false}
        name={name}
        email={email}
        password={pass}
        onName={setName}
        onEmail={setEmail}
        onPassword={setPass}
        onSubmit={handleSignup}
        onGoogle={handleGoogle}
        onClose={() => router.push("/")}
        onSwitch={() => router.push("/login")}
        loading={loading}
        error={error}
      />
    </KintuqScreen>
  );
}

function traducirError(code?: string): string {
  const errores: Record<string, string> = {
    USER_ALREADY_EXISTS: "Ya existe una cuenta con ese email",
    EMAIL_ALREADY_EXISTS: "Ya existe una cuenta con ese email",
    INVALID_EMAIL: "El email no es válido",
    PASSWORD_TOO_SHORT: "La contraseña debe tener al menos 8 caracteres",
    TOO_MANY_REQUESTS: "Demasiados intentos. Espera un momento",
  };
  return errores[code ?? ""] ?? "Error al crear la cuenta. Intenta de nuevo.";
}
