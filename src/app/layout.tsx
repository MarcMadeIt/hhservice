import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png"
        />
        <meta name="description" content="Skriv her" />
        <title>Halsnæs Haveservice</title>
      </head>
      <body className={ralewaySans.className}>{children}</body>
    </html>
  );
}
