
import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";
import { Portada } from "@/componentes/secciones/portada/Portada";
import { Legado } from "@/componentes/secciones/legado/Legado";
import { Tierras } from "@/componentes/secciones/tierras/Tierras";
import { Generaciones } from "@/componentes/secciones/generaciones/Generaciones";
import { Ritual } from "@/componentes/secciones/ritual/Ritual";
import { Proceso } from "@/componentes/secciones/proceso/Proceso";
import { Manifiesto } from "@/componentes/secciones/manifiesto/Manifiesto";
import { Maestro } from "@/componentes/secciones/maestro/Maestro";
import { Producto } from "@/componentes/secciones/producto/Producto";
import { PiePagina } from "@/componentes/estructura/pie-pagina/PiePagina";

export default function Home() {
  return (
    <main>
      <Encabezado />
      <Portada />
      <Legado />
      <Tierras />
      <Generaciones />
      <Ritual />
      <Proceso />
      <Manifiesto />
      <Maestro />
      <Producto />
      <PiePagina />
    </main>
  );
}
