import ThemeProvider from "@/utils/ThemeProvide";
import SideNavBar from "@/component/SideNavBar";
import SideBar from "@/component/SideBar";
import NavBar from "@/component/NavBar";
import type { Metadata } from "next";
import S from "@/styles";
import "./globals.css";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={`w-full h-full ${S.gradient} ${S.primary} tracking-wide`}>
            <NavBar />
            <div className={`w-full ${S.flxBC} `}>
              <SideNavBar />
              {children} 
              <SideBar />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
