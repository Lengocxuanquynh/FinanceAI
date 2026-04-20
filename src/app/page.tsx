import type { Metadata } from "next";
import { Landing } from "@/app/pages/Landing";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Smart AI Finance Dashboard",
  description:
    "Manage investments, expenses, and portfolio growth with a premium AI-powered finance experience.",
};

export default function UserHomePage() {
  return <Landing />;
}
