import Navbar from "@/components/admin/layout/Navbar";
import Topbar from "@/components/admin/layout/Topbar";

export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col sm:flex-row md:h-lvh bg-base-200 h-dvh relative">
      <Navbar />
      <div className="p-3  w-full md:pl-[238px] h-full overflow-y-auto flex flex-col gap-3 md:gap-5 pb-28 md:pb-0">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
