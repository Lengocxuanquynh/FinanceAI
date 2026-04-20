"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as { message?: string };
      setError(data.message ?? "Đăng ký thất bại.");
      setLoading(false);
      return;
    }

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F1A] px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-2 text-2xl font-semibold">Đăng ký tài khoản</h1>
        <p className="mb-6 text-sm text-gray-300">Bạn cũng có thể dùng Google để đăng nhập nhanh.</p>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mb-6 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-medium hover:bg-white/15"
        >
          Tiếp tục với Google
        </button>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Tên của bạn"
            className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none focus:border-cyan-300"
          />
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
            minLength={8}
            placeholder="Mật khẩu (tối thiểu 8 ký tự)"
            className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none focus:border-cyan-300"
          />
          {error ? <p className="text-sm text-red-300">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold disabled:opacity-60"
          >
            {loading ? "Đang tạo tài khoản..." : "Đăng ký"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-300">
          Đã có tài khoản?{" "}
          <Link href="/auth/signin" className="text-cyan-300 hover:text-cyan-200">
            Đăng nhập
          </Link>
        </p>
      </div>
    </main>
  );
}
