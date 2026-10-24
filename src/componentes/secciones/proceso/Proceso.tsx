
import Image from "next/image";
import styles from "./Proceso.module.css";

export function Proceso() {
  return (
    <section
      id="proceso"
      className={styles.proceso}
      aria-labelledby="titulo-proceso"
    >
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Proceso/Movil/06-proceso-movil.webp"
          alt=""
          width={4500}
          height={9000}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* FONDO ESCRITORIO */}
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Proceso/Web/06-proceso-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* ENCABEZADO CENTRAL */}
      <div className={styles.encabezado}>
        <h2 id="titulo-proceso" className={styles.titulo}>
          El proceso
        </h2>

        <p className={styles.frase}>
          Tradición en cada etapa
        </p>
      </div>

      {/* NOMBRES DE LAS ETAPAS */}
      <div className={styles.etapas}>
        <p className={styles.etapa}>Cocimiento</p>
        <p className={styles.etapa}>Molienda</p>
        <p className={styles.etapa}>Destilación</p>
      </div>
    </section>
  );
}
