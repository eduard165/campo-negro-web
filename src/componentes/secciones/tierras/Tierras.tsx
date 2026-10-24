
import Image from "next/image";
import styles from "./Tierras.module.css";

export function Tierras() {
  return (
    <section
      id="tierras"
      className={styles.tierras}
      aria-labelledby="titulo-tierras"
    >
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Tierras/Movil/03-tierras-movil.webp"
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
          src="/imagenes/Tierras/Web/03-tierras-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* CONTENIDO */}
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

        <div className={styles.parrafos}>
          <p>
            Esta bebida milenaria nace en Oaxaca, tierra
            donde el agave, el tiempo y el oficio convergen
            hasta poder crearla.
          </p>

          <p>
            Sin embargo, nuestra historia también tiene
            raíces Veracruzanas... En Tantoyuca,
            encontramos una tierra ligada a nuestros
            antepasados, a su cultura y a sus más bellas
            tradiciones.
          </p>

          <p>
            Dos tierras diferentes que forman parte de
            una misma historia y construyen un legado
            que comienza con la familia, continúa a través
            de las generaciones y encuentra en el mezcal,
            una manera de ser recordado.
          </p>
        </div>
      </div>
    </section>
  );
}
