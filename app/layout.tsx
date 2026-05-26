import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen Cabinet Refinishing Toronto | Factory Finish in 3 Days - P2D",
  description:
    "Transform your kitchen cabinets without replacing them. Professional refinishing in Toronto & GTA - finished in 3 days, from $3,000. Free quote.",
  robots: {
    index: false,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
