import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xpert Chrome Extension",
  description: "Enhance your X experience using Xpert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
