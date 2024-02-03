import type { Metadata } from "next";
import "./globals.css";
import  Navbar from "./navbar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({weight: ["100", "200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});

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
      <body className={`${urbanist.className} flex flex-col h-lvh w-vw p-9 bg-modern-background`}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="children h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
