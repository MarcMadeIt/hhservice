import Navbar from "@/components/admin/layout/Navbar";
import Topbar from "@/components/admin/layout/Topbar";

export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col sm:flex-row sm:h-lvh bg-base-200 h-dvh relative">
      <Navbar />
      <div className="p-3 w-full sm:pl-[238px] flex flex-col gap-3 md:gap-5 pb-28 md:pb-0">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
