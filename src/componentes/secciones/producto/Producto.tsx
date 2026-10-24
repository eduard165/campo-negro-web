
import Image from "next/image";
import styles from "./Producto.module.css";

export function Producto() {
  return (
    <section
      id="producto"
      className={styles.producto}
      aria-label="Características del mezcal Campo Negro"
    >
      {/* ======================================
          FONDO MÓVIL
      ====================================== */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Producto/Movil/09-producto-movil.webp"
          alt=""
          width={4500}
          height={9000}
          sizes="(max-width: 767px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* ======================================
          FONDO ESCRITORIO
      ====================================== */}
      <div className={styles.fondoEscritorio}>
        <Image
          src="/imagenes/Producto/Web/09-producto-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* ======================================
          CARACTERÍSTICAS DEL PRODUCTO
      ====================================== */}
      <div className={styles.caracteristicas}>
        <div className={styles.columna}>
          <p>
            Totalmente
            <br />
            artesanal
          </p>

          <p>
            100% agave
            <br />
            <span>(A. Angustifolia)</span>
          </p>
        </div>

        <div className={styles.columna}>
          <p>
            Cont. neto
            <br />
            750 ml.
          </p>

          <p>
            Denominación
            <br />
            de origen
          </p>
        </div>

        <div className={styles.columna}>
          <p>
            Alc. vol.
            <br />
            37%
          </p>

          <p>
            Producto
            <br />
            mexicano
          </p>
        </div>
      </div>
    </section>
  );
}
