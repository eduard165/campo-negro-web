
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./PiePagina.module.css";

export function PiePagina() {
  return (
    <footer id="contacto" className={styles.piePagina}>
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/PiePagina/Movil/10-piepagina-movil.webp"
          alt=""
          width={900}
          height={450}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/PiePagina/Web/10-piepagina-desktop.webp"
          alt=""
          width={1800}
          height={450}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.contenido}>
        <span className={styles.contacto}>
          CONTÁCTANOS
        </span>
        <div
          className={styles.redesSociales}
          aria-label="Redes sociales de Campo Negro"
        >
          <span
            className={styles.iconoRed}
            role="img"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </span>
          <span
            className={styles.iconoRed}
            role="img"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebookF aria-hidden="true" />
          </span>
          <span
            className={styles.iconoRed}
            role="img"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </span>
        </div>
      </div>
    </footer>
  );
}
