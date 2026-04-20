import { handlers } from "@/auth";

export const runtime = "nodejs";

export async function GET(request: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  return handlers.GET(request, context);
}

export async function POST(request: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  return handlers.POST(request, context);
}
