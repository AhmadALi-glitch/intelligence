'use client';

import "./globals.css";
import  Navbar from "./navbar";
import { useReducer } from "react";
import { ThemeContext, ThemeDispatcherContext, themeReducerHandler } from "@/theme/context";

// where i'm gonna put those ???
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Intelligence"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let [theme, dispatchThemeChanging] = useReducer(themeReducerHandler[0], themeReducerHandler[1]);

  return (
    <html lang="en">
      <body className={`flex flex-col h-lvh w-vw p-10 bg-modern-background`}>
        <ThemeContext.Provider value={theme}>
          <ThemeDispatcherContext.Provider value={dispatchThemeChanging}>
            <div className="navbar">
              <Navbar/>
            </div>
            <div className="children h-full">
              {children}
            </div>
          </ThemeDispatcherContext.Provider>
        </ThemeContext.Provider>
      </body>
    </html>
  );

}
