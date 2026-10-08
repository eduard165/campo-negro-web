import { Portada } from "@/componentes/secciones/portada/Portada";
import { Legado } from "@/componentes/secciones/legado/Legado";
import { Identidad } from "@/componentes/secciones/identidad/Identidad";
import { Origen } from "@/componentes/secciones/origen/Origen";
import { Ritual } from "@/componentes/secciones/ritual/Ritual";
import { Manifiesto } from "@/componentes/secciones/manifiesto/Manifiesto";
import { Proceso } from "@/componentes/secciones/proceso/Proceso";
import { Caracteristicas } from "@/componentes/secciones/caracteristicas/Caracteristicas";
import { Autor } from "@/componentes/secciones/autor/Autor";

export default function Home() {
  return (
    <main>
      <Portada />
      <Legado />
      <Identidad />
      <Origen />
      <Ritual />
      <Manifiesto />
      <Proceso />
      <Caracteristicas/>
      <Autor />
    </main>
  );
}