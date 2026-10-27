import Image from "next/image";
import styles from "./Ritual.module.css";

export function Ritual() {
  return (
    <section
      id="ritual"
      className={styles.ritual}
      aria-labelledby="titulo-ritual"
    >
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Ritual/Movil/05-ritual-movil.webp"
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
          src="/imagenes/Ritual/Web/05-ritual-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>

      <div className={styles.contenido}>
        <h2 id="titulo-ritual" className={styles.titulo}>
          El
          <br />
          ritual
        </h2>
        <p className={styles.frase}>
          También sucede
          <br />
          alrededor de la mesa
        </p>
        <h3 className={styles.subtitulo}>Más que una bebida</h3>
        <div className={styles.parrafos}>
          <p>
            El mezcal es una bebida que nace de la{" "}
            <br className={styles.saltoMovil} />
            tierra, del agave y del conocimiento{" "}
            <br className={styles.saltoMovil} />
            transmitido de generación en{" "}
            <br className={styles.saltoMovil} />
            generación.
          </p>

          <p>
            Campo Negro honra ese origen a{" "}
            <br className={styles.saltoMovil} />
            través de un proceso que requiere{" "}
            <br className={styles.saltoMovil} />
            tiempo, paciencia y oficio.
          </p>

          <p>
            Desde el cocimiento del agave hasta{" "}
            <br className={styles.saltoMovil} />
            su molienda y destilación, cada etapa{" "}
            <br className={styles.saltoMovil} />
            forma parte de una tradición que ha{" "}
            <br className={styles.saltoMovil} />
            permanecido viva durante siglos.{" "}
            <br className={styles.saltoMovil} />
            Porque el mezcal no solo se bebe...{" "}
            <br />
            Se comparte, se conversa, se recuerda.
          </p>
        </div>
      </div>
    </section>
  );
}