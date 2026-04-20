import { Sidebar } from "@/app/components/Sidebar";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <Sidebar />
      <div className="ml-64">{children}</div>
    </div>
  );
}
