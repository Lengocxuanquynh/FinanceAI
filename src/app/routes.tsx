import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Wallets } from "./pages/Wallets";
import { Crypto } from "./pages/Crypto";
import { Stocks } from "./pages/Stocks";
import { Settings } from "./pages/Settings";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/dashboard",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "analytics", Component: Analytics },
      { path: "wallets", Component: Wallets },
      { path: "crypto", Component: Crypto },
      { path: "stocks", Component: Stocks },
      { path: "settings", Component: Settings },
    ],
  },
  // Redirect old paths to dashboard paths
  {
    path: "/settings",
    element: <Navigate to="/dashboard/settings" replace />,
  },
  {
    path: "/analytics",
    element: <Navigate to="/dashboard/analytics" replace />,
  },
  {
    path: "/wallets",
    element: <Navigate to="/dashboard/wallets" replace />,
  },
  {
    path: "/crypto",
    element: <Navigate to="/dashboard/crypto" replace />,
  },
  {
    path: "/stocks",
    element: <Navigate to="/dashboard/stocks" replace />,
  },
]);