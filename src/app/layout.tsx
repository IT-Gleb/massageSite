import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./assets/css/globals.css";
import { FooterLayout } from "@/components/version3/layout/footerLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Массаж Fohow в Сочи. Индивидуальный подход к клиенту.",
  description:
    "Кабинет индивидуалного специалиста по массажу Fohow. В Центральном районе г.Сочи. Индивидуальный подход к клиенту",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
