import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";

export function Root() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <Sidebar />
      <div className="ml-64">
        <Outlet />
      </div>
    </div>
  );
}