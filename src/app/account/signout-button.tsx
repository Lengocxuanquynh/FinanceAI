"use client";

import { signOut } from "next-auth/react";

export function UserSignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-medium"
    >
      Đăng xuất
    </button>
  );
}
