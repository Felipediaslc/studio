import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../app/components/navBar/index";
import Whats from "../app/components/whats/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio",
  description: "Test Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
         <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <NavBar />
         
       
          {children}

         <Whats />
        </body>

     
    </html>
  );
}
