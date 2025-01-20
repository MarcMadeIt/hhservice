import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// Only protect /admin routes
export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
