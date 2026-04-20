"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInForm({ callbackUrl }: { callbackUrl: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCredentialsSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (result?.error) {
      setError("Sai email hoặc mật khẩu.");
      setLoading(false);
      return;
    }

    router.push(result?.url || callbackUrl);
    router.refresh();
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
      <h1 className="mb-2 text-2xl font-semibold">Đăng nhập người dùng</h1>
      <p className="mb-6 text-sm text-gray-300">Dùng Google hoặc email/password.</p>

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl })}
        className="mb-6 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-medium hover:bg-white/15"
      >
        Đăng nhập với Google
      </button>

      <form onSubmit={handleCredentialsSignIn} className="space-y-4">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none focus:border-cyan-300"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          required
          placeholder="Mật khẩu"
          className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none focus:border-cyan-300"
        />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold disabled:opacity-60"
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-300">
        Chưa có tài khoản?{" "}
        <Link href="/auth/signup" className="text-cyan-300 hover:text-cyan-200">
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}
