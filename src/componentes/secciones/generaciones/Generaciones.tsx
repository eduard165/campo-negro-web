import Image from "next/image";
import styles from "./Generaciones.module.css";

export function Generaciones() {
  return (
    <section
      id="generaciones"
      className={styles.generaciones}
      aria-labelledby="titulo-generaciones"
    >
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Generaciones/Movil/04-generaciones-movil.png"
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
          src="/imagenes/Generaciones/Web/04-generaciones-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
          unoptimized
        />
      </div>
      <div className={styles.encabezado}>
        <h2 id="titulo-generaciones" className={styles.titulo}>
          Dos fechas,
          <br />
          dos generaciones
        </h2>

        <p className={styles.frase}>
          Una historia
          <br />
          que trasciende
        </p>
      </div>
      <div className={styles.contenido}>
        <h3 className={styles.subtitulo}>
          Generaciones que hacen una misma
          <br />
          historia para perdurar en el tiempo.
        </h3>
        <div className={styles.parrafos}>
          <p>
            Campo Negro nace de esa unión entre el{" "}
            <br className={styles.saltoMovil} />
            pasado y el presente, entre aquello que nos{" "}
            <br className={styles.saltoMovil} />
            dio origen y todo aquello que aún está por{" "}
            <br className={styles.saltoMovil} />
            construirse.
          </p>
          <p>
            Un origen que nos une, una memoria que{" "}
            <br className={styles.saltoMovil} />
            permanece a través del tiempo y un legado{" "}
            <br className={styles.saltoMovil} />
            que continúa conservándose gracias a{" "}
            <br className={styles.saltoMovil} />
            quienes lo mantienen vivo.
          </p>
        </div>
        <div className={styles.alacran}>
          <Image
            src="/imagenes/Generaciones/Movil/04-generaciones-alacran.png"
            alt="Ilustración de un alacrán"
            width={160}
            height={160}
            sizes="(max-width: 767px) 12vw, 1px"
            className={styles.imagenAlacran}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}