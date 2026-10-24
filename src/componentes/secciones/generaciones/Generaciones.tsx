
import Image from "next/image";
import styles from "./Generaciones.module.css";

export function Generaciones() {
  return (
    <section
      id="generaciones"
      className={styles.generaciones}
      aria-labelledby="titulo-generaciones"
    >
      {/* ==========================================
          FONDO MÓVIL
      ========================================== */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Generaciones/Movil/04-generaciones-movil.webp"
          alt=""
          width={4500}
          height={9000}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* ==========================================
          FONDO ESCRITORIO
      ========================================== */}
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Generaciones/Web/04-generaciones-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* ==========================================
          TÍTULO SOBRE EL AGAVE
      ========================================== */}
      <div className={styles.encabezado}>
        <h2
          id="titulo-generaciones"
          className={styles.titulo}
        >
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

      {/* ==========================================
          CONTENIDO
      ========================================== */}
      <div className={styles.contenido}>
        <h3 className={styles.subtitulo}>
          Generaciones que hacen una misma
          <span className={styles.saltoEscritorio}>
            <br />
          </span>{" "}
          historia para perdurar en el tiempo.
        </h3>

        <div className={styles.parrafos}>
          <p>
            Campo Negro nace de esa unión entre el pasado
            y el presente, entre aquello que nos dio origen
            y todo aquello que aún está por construirse.
          </p>

          <p>
            Un origen que nos une, una memoria que
            permanece a través del tiempo y un legado
            que continúa conservándose gracias a
            quienes lo mantienen vivo.
          </p>
        </div>
      </div>
    </section>
  );
}
