import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halsnæs Haveservice",
  description: "Professionel haveservice i Halsnæs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon1.png" />
      </head>
      <body className={ralewaySans.className}>{children}</body>
    </html>
  );
}
