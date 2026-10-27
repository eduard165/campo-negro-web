import Image from "next/image";
import styles from "./Legado.module.css";

export function Legado() {
  return (
    <section
      id="legado"
      className={styles.legado}
      aria-labelledby="titulo-legado"
    >
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Legado/Movil/02-legado-movil.webp"
          alt=""
          width={4500}
          height={9000}
          sizes="(max-width: 767px) 100vw, 0px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Legado/Web/02-legado-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 0px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.contenido}>
        <h2 id="titulo-legado" className={styles.titulo}>
          De una memoria, nace
          <br />
          un legado...
        </h2>
        <p className={styles.frase}>
          Hay historias que no
          <br />
          terminan, se transforman
        </p>
        <h3 className={styles.subtitulo}>
          Campo Negro nace como un homenaje
        </h3>
        <div className={styles.parrafos}>
          <p>
            También existen otras que encuentran nuevas{" "}
            <br className={styles.salto} />
            formas de permanecer y siguen presentes en{" "}
            <br className={styles.salto} />
            aquello que construimos.
          </p>
          <p>
            Campo Negro nace como un homenaje a la{" "}
            <br className={styles.salto} />
            memoria de un ser querido, cuya presencia{" "}
            <br className={styles.salto} />
            permanece en el origen y en el sentido de{" "}
            <br className={styles.salto} />
            este proyecto.
          </p>
          <p>
            El mezcal se convierte así en algo más que{" "}
            <br className={styles.salto} />
            una bebida: en una manera de honrar el{" "}
            <br className={styles.salto} />
            pasado, celebrar el presente y dejar una{" "}
            <br className={styles.salto} />
            huella hacia el futuro.
          </p>
          <p>
            De la tierra nace el agave; de la memoria, la{" "}
            <br className={styles.salto} />
            voluntad de crear algo que trascienda.
          </p>
        </div>
      </div>
    </section>
  );
}