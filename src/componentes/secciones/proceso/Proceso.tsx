
import Image from "next/image";
import styles from "./Proceso.module.css";

const etapas = [
  {
    nombre: "Cocimiento",
    imagen: "/imagenes/Proceso/06-proceso-cocimiento.png",
  },
  {
    nombre: "Molienda",
    imagen: "/imagenes/Proceso/06-proceso-molienda.png",
  },
  {
    nombre: "Destilación",
    imagen: "/imagenes/Proceso/06-proceso-destilacion.png",
  },
] as const;

export function Proceso() {
  return (
    <section
      id="proceso"
      className={styles.proceso}
      aria-labelledby="titulo-proceso"
    >
      {/* ENCABEZADO */}
      <div className={styles.encabezado}>
        <h2 id="titulo-proceso" className={styles.titulo}>
          El proceso
        </h2>

        <p className={styles.frase}>
          Tradición en cada etapa
        </p>
      </div>

      {/* ILUSTRACIONES Y NOMBRES */}
      <div className={styles.etapas}>
        {etapas.map((etapa) => (
          <figure key={etapa.nombre} className={styles.etapa}>
            <div className={styles.contenedorImagen}>
              <Image
                src={etapa.imagen}
                alt={`Ilustración de ${etapa.nombre.toLowerCase()}`}
                width={900}
                height={650}
                className={styles.imagenEtapa}
                sizes="(max-width: 767px) 84vw, 28vw"
              />
            </div>

            <figcaption className={styles.nombreEtapa}>
              {etapa.nombre}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
