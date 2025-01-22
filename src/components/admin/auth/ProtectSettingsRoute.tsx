"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { readUserSession } from "@/lib/auth/readUserSession";

const ProtectSettingsRoute = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);
  const [accessDenied, setAccessDenied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await readUserSession();
      if (session) {
        setRole(session.role);

        if (pathname === "/admin/settings" && session.role === "editor") {
          setAccessDenied(true);
        }
      } else {
        setRole(null);
        setAccessDenied(true);
      }
      setLoading(false);
    })();
  }, [pathname]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"></div>;
  }

  if (accessDenied) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Du har ikke adgang</h1>
          <p className="text-gray-600">
            Kontakt en administrator for at få adgang.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectSettingsRoute;
