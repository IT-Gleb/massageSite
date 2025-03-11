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
  keywords: [
    "массаж",
    "массаж в Сочи",
    "массаж Fohow",
    "услуги массажа",
    "биоэнергомассаж",
    "инновационный прибор",
    "Fohow",
    "Ультрозвуковая насадка",
    "Массаж спины",
    "Массаж лица",
    "Массаж воротниковой зоны",
    "Массаж ног",
    "Массаж коленей",
  ],
  //  <link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon-32x32.png">
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
