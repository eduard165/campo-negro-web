import Image from "next/image";
import { EncabezadoFinal } from "@/componentes/estructura/encabezado/EncabezadoFinal";

const secciones = [['inicio', 'Inicio'], ['legado', 'Un legado que trasciende'], ['tierras', 'Dos tierras, una historia'], ['generaciones', 'Dos fechas, dos generaciones'], ['ritual', 'El ritual'], ['proceso', 'El proceso'], ['manifiesto', 'Nuestra intención'], ['maestro', 'Maestro mezcalero'], ['producto', 'Nuestro mezcal'], ['contacto', 'Contáctanos']] as const;

export default function Home() {
  return (
    <main>
      <EncabezadoFinal />
      {secciones.map(([id, titulo], index) => {
        const numero = String(index + 1).padStart(2, "0");
        return (
          <section className="lamina" id={id} key={id} aria-label={titulo}>
            <picture>
              <source media="(max-width: 767px)" srcSet={`/imagenes/diseno-final/${numero}-movil.webp`} type="image/webp" />
              <Image
                src={`/imagenes/diseno-final/${numero}-desktop.webp`}
                alt={`Diseño de Campo Negro: ${titulo}`}
                width={1800}
                height={index === 9 ? 450 : 900}
                priority={index === 0}
                sizes="100vw"
                className="lamina-imagen"
              />
            </picture>
          </section>
        );
      })}
    </main>
  );
}
