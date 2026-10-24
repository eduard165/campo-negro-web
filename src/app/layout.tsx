
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// GILL SANS CONDENSED
// Títulos principales
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

// MYRIAD PRO
// Subtítulos, párrafos y botones
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
    },
  ],
  variable: "--font-myriad",
  display: "swap",
});

// LUXURIOUS SCRIPT
// Frases decorativas
const luxurious = localFont({
  src: "../fuentes/LuxuriousScript-Regular.ttf",
  variable: "--font-luxurious",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campo Negro 1430 | Una historia que permanece",
  description:
    "Campo Negro, mezcal artesanal de origen oaxaqueño. Una historia que cruza generaciones y acompaña momentos para recordar.",
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
