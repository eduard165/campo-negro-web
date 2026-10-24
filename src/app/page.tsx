
import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";
import { Portada } from "@/componentes/secciones/portada/Portada";
import { Legado } from "@/componentes/secciones/legado/Legado";

export default function Home() {
  return (
    <main>
      <Encabezado />

      <Portada />
      <Legado />
    </main>
  );
}
