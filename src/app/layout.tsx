import type { Metadata } from "next";
import {
  Luxurious_Script,
  Montserrat,
} from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--fuente-principal",
});

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--fuente-manuscrita",
});

export const metadata: Metadata = {
  title: "Campo Negro",
  description: "Mezcal artesanal Campo Negro",
};

export default function DisenoRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${montserrat.variable}
        ${luxuriousScript.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}