
import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const fuenteMenu = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--fuente-menu",
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
    <html lang="es" className={fuenteMenu.variable}>
      <body>{children}</body>
    </html>
  );
}
