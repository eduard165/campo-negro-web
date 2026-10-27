
import Image from "next/image";
import styles from "./Tierras.module.css";

export function Tierras() {
  return (
    <section
      id="tierras"
      className={styles.tierras}
      aria-labelledby="titulo-tierras"
    >
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Tierras/Movil/03-tierras-movil.webp"
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
          src="/imagenes/Tierras/Web/03-tierras-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.contenido}>
        <h2 id="titulo-tierras" className={styles.titulo}>
          Dos tierras,
          <br />
          una historia...
        </h2>
        <p className={styles.frase}>
          Raíces que van
          <br />
          más allá
        </p>
        <h3 className={styles.subtitulo}>
          Veracruz es parte de nuestra identidad
        </h3>
        <div className={styles.parrafos}>
          <p>
            Esta bebida milenaria nace en Oaxaca,{" "}
            <br className={styles.saltoMovil} />
            tierra donde el agave, el tiempo y el oficio{" "}
            <br className={styles.saltoMovil} />
            convergen hasta poder crearla.
          </p>

          <p>
            Sin embargo, nuestra historia también{" "}
            <br className={styles.saltoMovil} />
            tiene raíces Veracruzanas... En Tantoyuca,{" "}
            <br className={styles.saltoMovil} />
            encontramos una tierra ligada a nuestros{" "}
            <br className={styles.saltoMovil} />
            antepasados, a su cultura y a sus más bellas{" "}
            <br className={styles.saltoMovil} />
            tradiciones.
          </p>

          <p>
            Dos tierras diferentes que forman parte de{" "}
            <br className={styles.saltoMovil} />
            una misma historia y construyen un legado{" "}
            <br className={styles.saltoMovil} />
            que comienza con la familia, continúa a{" "}
            <br className={styles.saltoMovil} />
            través de las generaciones y encuentra en{" "}
            <br className={styles.saltoMovil} />
            el mezcal, una manera de ser recordado.
          </p>
        </div>
      </div>
    </section>
  );
}
