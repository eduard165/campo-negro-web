
import Image from "next/image";
import styles from "./Ritual.module.css";

export function Ritual() {
  return (
    <section
      id="ritual"
      className={styles.ritual}
      aria-labelledby="titulo-ritual"
    >
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Ritual/Movil/05-ritual-movil.webp"
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
          src="/imagenes/Ritual/Web/05-ritual-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* CONTENIDO HTML */}
      <div className={styles.contenido}>
        {/* TÍTULO */}
        <h2 id="titulo-ritual" className={styles.titulo}>
          El
          <br />
          ritual
        </h2>

        {/* FRASE MANUSCRITA */}
        <p className={styles.frase}>
          También sucede
          <br />
          alrededor de la mesa
        </p>

        {/* PÁRRAFOS */}
        <div className={styles.parrafos}>
          <p>
            El mezcal es una bebida que nace de la tierra,
            del agave y del conocimiento transmitido de
            generación en generación.
          </p>

          <p>
            Campo Negro honra ese origen a través de un
            proceso que requiere tiempo, paciencia y
            oficio. Desde el cocimiento del agave hasta su
            molienda y destilación, cada etapa forma
            parte de una tradición que ha permanecido
            viva durante siglos.
          </p>

          <p>
            Porque el mezcal no solamente se bebe.
            <br />
            Se comparte, se conversa, se recuerda.
          </p>
        </div>
      </div>
    </section>
  );
}
