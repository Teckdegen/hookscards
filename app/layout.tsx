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

const description =
  "Hooks.cards replaces the bank account behind your debit card with a liquidity pool. A Uniswap v4 hook keeps it protected, spendable, and cheap to spend.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hooks.cards"),
  title: "hooks.cards",
  description,
  openGraph: {
    title: "hooks.cards",
    description,
    images: [{ url: "/social-preview.jpg", width: 1280, height: 426, alt: "hooks.cards app and debit card" }],
    url: "/",
    siteName: "hooks.cards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hooks.cards",
    description,
    images: ["/social-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
