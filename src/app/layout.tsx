import type { Metadata } from "next";
import "./globals.css";
import  Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Intelligence"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-vh w-vw p-9 bg-modern-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
