import ThemeProvider from "@/utils/ThemeProvide";
import SideBar from "@/component/SideBar";
import NavBar from "@/component/NavBar";
import type { Metadata } from "next";
import S from "@/styles";
import "./globals.css";
import SideNavBar from "@/component/SideNavBar";

export const metadata: Metadata = {
  title: "Handyman",
  description: "handyman near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${S.primary} h-full w-full tracking-wide`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={` `}>
            <NavBar />
            <div className={`${S.gradient}`}>
              <SideBar />
              <SideNavBar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
