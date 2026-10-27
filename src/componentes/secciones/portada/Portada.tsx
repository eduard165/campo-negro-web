import Image from "next/image";
import styles from "./Portada.module.css";

export function Portada() {
  return (
    <section id="inicio" className={styles.portada}>
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Portada/Movil/01-portada-movil.webp"
          alt="Botella de mezcal Campo Negro"
          width={4500}
          height={9000}
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Portada/Web/01-portada-desktop.webp"
          alt="Botella de mezcal Campo Negro"
          width={9000}
          height={4500}
          priority
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.contenido}>
        <h1 className={styles.titulo}>
          Una historia que
          <br />
          permanece...
        </h1>
        <p className={styles.frase}>
          Descúbrela junto
          <br />
          a nosotros
        </p>
        <h2 className={styles.subtitulo}>Campo Negro</h2>
        <div className={styles.parrafos}>
          <p>
            Nacido en el corazón de Oaxaca y llevado por{" "}
            <br className={styles.saltoEscritorio} />
            una historia que cruza generaciones, esta{" "}
            <br className={styles.saltoEscritorio} />
            bebida ancestral no es solo un mezcal más.
          </p>

          <p className={styles.segundoParrafo}>
            Queremos estar contigo en todos aquellos{" "}
            <br className={styles.saltoEscritorio} />
            momentos que merecen ser recordados.
          </p>
        </div>
      </div>
    </section>
  );
}