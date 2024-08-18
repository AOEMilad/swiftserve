import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftServe Vending Enterprises",
  description: "West Coast Vending Supplier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
