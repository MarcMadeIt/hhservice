import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Halsnæs Haveservice",
    template: "%s - Halsnæs Haveservice",
  },
  description:
    "Professionel haveservice i Halsnæs og Nordsjælland. Vi tilbyder græsslåning, hækkeklipning, brolægning, ukrudtsbekæmpelse og vedligeholdelse for private og erhverv.",
  metadataBase: new URL("https://hhservice.dk"),
  openGraph: {
    title: "Halsnæs Haveservice",
    description:
      "Få hjælp til din have i Halsnæs og Nordsjælland – vi tilbyder alt fra græsslåning til fliserens og vedligeholdelse.",
    url: "https://hhservice.dk",
    siteName: "Halsnæs Haveservice",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Halsnæs Haveservice – Professionel haveservice i Halsnæs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halsnæs Haveservice",
    description:
      "Professionel haveservice og vedligeholdelse i Halsnæs og Nordsjælland. Græsslåning, hækkeklipning, brolægning og mere.",
    images: ["/hero.webp"],
  },
  icons: {
    icon: "/favicon1.png",
    apple: "/favicon1.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a4f2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={ralewaySans.className}>{children}</body>
    </html>
  );
}
