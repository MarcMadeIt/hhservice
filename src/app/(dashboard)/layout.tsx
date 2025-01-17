import Navbar from "@/components/admin/layout/Navbar";
import Topbar from "@/components/admin/layout/Topbar";

export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <header>
          <Navbar />
        </header>
        <main>
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}
