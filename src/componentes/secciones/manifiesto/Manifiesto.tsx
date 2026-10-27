
import Image from "next/image";
import styles from "./Manifiesto.module.css";

export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className={styles.manifiesto}
      aria-labelledby="titulo-manifiesto"
    >
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Manifiesto/Movil/07-manifiesto-movil1.png"
          alt=""
          width={4500}
          height={9000}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Manifiesto/Web/07-manifiesto-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.contenido}>
        <h2 id="titulo-manifiesto" className={styles.titulo}>
          <span className={styles.textoMovil}>
            NUESTRA INTENCIÓN ES
            <br />
            ACOMPAÑARTE EN TU MESA,
            <br />
            ESTAR EN ESAS
            <br />
            CONVERSACIONES FUGACES
            <br />
            Y EN AQUELLOS
            <br />
            MOMENTOS QUE,
            <br />
            POR MÁS EFÍMEROS
            <br />
            QUE PAREZCAN,
            <br />
            MERECEN SER RECORDADOS.
          </span>

          <span className={styles.textoEscritorio}>
            Nuestra intención es acompañarte en tu mesa,
            estar en esas conversaciones fugaces y en
            aquellos momentos que, por más efímeros
            que parezcan, merecen ser recordados.
          </span>
        </h2>
      </div>
    </section>
  );
}
