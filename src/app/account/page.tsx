import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0F1A] px-4 text-white">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-4 text-2xl font-semibold">Tài khoản người dùng</h1>
        <p className="mb-6 text-gray-300">
          Bạn có thể đăng nhập bằng Google hoặc email/password tại trang đăng nhập người dùng.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
            Về trang chủ
          </Link>
          <Link href="/auth/signin" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-medium">
            Đăng nhập
          </Link>
        </div>
      </div>
    </main>
  );
}
