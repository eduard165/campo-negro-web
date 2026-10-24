
import Image from "next/image";
import styles from "./Manifiesto.module.css";

export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className={styles.manifiesto}
      aria-labelledby="titulo-manifiesto"
    >
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Manifiesto/Movil/07-manifiesto-movil.webp"
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
          src="/imagenes/Manifiesto/Web/07-manifiesto-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* MENSAJE CENTRAL */}
      <div className={styles.contenido}>
        <h2 id="titulo-manifiesto" className={styles.titulo}>
          Nuestra intención es acompañarte en tu mesa,
          estar en esas conversaciones fugaces y en
          aquellos momentos que, por más efímeros
          que parezcan, merecen ser recordados.
        </h2>
      </div>
    </section>
  );
}
