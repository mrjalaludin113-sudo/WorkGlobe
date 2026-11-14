import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkGlobe — Your Career. Your World.",
  description:
    "Discover worldwide jobs and visa opportunities. Connect with employers and recruiters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
