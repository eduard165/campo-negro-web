
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// GILL SANS CONDENSED - TÍTULOS
const gill = localFont({
  src: [
    {
      path: "../fuentes/GillSans-Condensed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fuentes/GillSans-Condensed-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gill",
  display: "swap",
});

// MYRIAD PRO - PÁRRAFOS Y SUBTÍTULOS
const myriad = localFont({
  src: [
    {
      path: "../fuentes/MyriadPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fuentes/MyriadPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fuentes/MyriadPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myriad",
  display: "swap",
});

// LUXURIOUS SCRIPT - FRASES DECORATIVAS
const luxurious = localFont({
  src: "../fuentes/LuxuriousScript-Regular.ttf",
  variable: "--font-luxurious",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campo Negro | Mezcal Artesanal",
  description:
    "Campo Negro, mezcal artesanal de Ejutla de Crespo, Oaxaca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${gill.variable}
        ${myriad.variable}
        ${luxurious.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}
