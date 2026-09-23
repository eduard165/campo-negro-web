import Image from "next/image";

import estilos from "./Mezcal.module.css";

export function Mezcal() {
  return (
    <section id="mezcal" className={estilos.mezcal}>
      <Image
        src="/imagenes/mezcal/mezcal.png"
        alt="Mezcal Campo Negro Espadín Joven"
        fill
        sizes="100vw"
        className={estilos.fondo}
      />

      <div className={estilos.oscurecimiento} />

      <div className={estilos.contenedor}>
        <div className={estilos.informacion}>
          <p className={estilos.subtitulo}>
            NUESTRO MEZCAL
          </p>

          <h2 className={estilos.titulo}>
            ESPADÍN
            <br />
            JOVEN
          </h2>

          <div className={estilos.linea} />

          <p className={estilos.descripcion}>
            Un mezcal artesanal que refleja la esencia de
            Ejutla de Crespo, Oaxaca. Elaborado con agave
            Espadín (A. angustifolia), nuestro mezcal es el
            resultado de un proceso cuidadoso y tradicional
            que honra la tierra y a su gente.
          </p>

          <div className={estilos.detalles}>
            <div className={estilos.detalle}>
              <span>Cont.</span>
              <strong>Neto 750ml</strong>
            </div>

            <div className={estilos.divisor} />

            <div className={estilos.detalle}>
              <span>45%</span>
              <strong>Alc. Vol.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}