import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./provider";

const inter = Inter ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chez'lene's Portfolio",
  description: "Chez'lene Cornwall Updated full stack developer portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </main>
        <Footer />
        </body>
    </html>
  );
}
