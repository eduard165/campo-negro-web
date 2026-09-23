import { Esencia } from "@/componentes/secciones/esencia/Esencia";
import { Historia } from "@/componentes/secciones/historia/Historia";
import { Portada } from "@/componentes/secciones/portada/Portada";

export default function Inicio() {
  return (
    <main>
      <Portada />
      <Esencia />
      <Historia />
    </main>
  );
}