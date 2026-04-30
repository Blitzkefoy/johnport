import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Rey Maños | Portfolio",
  description: "IT Student & Aspiring Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "h-full", "antialiased", outfit.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
