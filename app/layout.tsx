import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter with the optical-size axis gives the tighter "display" cut at large sizes.
const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const mono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

// The live site address, used to build absolute share-image links.
const siteUrl = "https://zedkr.finance";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zedkr",
  openGraph: {
    title: "",
    description: "",
    images: [{ url: "/og.jpg", width: 1500, height: 500, alt: "Zedkr" }],
    url: "/",
    siteName: "Zedkr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
