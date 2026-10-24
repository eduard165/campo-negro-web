
import Image from "next/image";
import styles from "./PiePagina.module.css";

export function PiePagina() {
  return (
    <footer id="contacto" className={styles.piePagina}>
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/PiePagina/Movil/10-piepagina-movil.webp"
          alt=""
          width={900}
          height={450}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* FONDO ESCRITORIO */}
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/PiePagina/Web/10-piepagina-desktop.webp"
          alt=""
          width={1800}
          height={450}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* TEXTO DE CONTACTO */}
      <div className={styles.contenido}>
        <span className={styles.contacto}>
          CONTÁCTANOS
        </span>
      </div>
    </footer>
  );
}
