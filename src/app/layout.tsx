import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campo Negro 1430 | Una historia que permanece",
  description: "Campo Negro, mezcal artesanal de origen oaxaqueño. Una historia que cruza generaciones y acompaña momentos para recordar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
