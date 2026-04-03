import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Modern Tech Stack | Next.js 14 Boilerplate",
  description: "A modern tech stack showcase with Next.js 14, TypeScript, Tailwind CSS, and more",
  keywords: ["nextjs", "typescript", "tailwindcss", "prisma", "postgresql", "boilerplate", "starter"],
  authors: [{ name: "Modern Tech Team" }],
  openGraph: {
    title: "Modern Tech Stack",
    description: "A modern tech stack showcase with Next.js 14, TypeScript, Tailwind CSS, and more",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          
          {/* Vercel Analytics */}
          <Analytics />
          
          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
