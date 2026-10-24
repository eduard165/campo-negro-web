
import Image from "next/image";
import styles from "./Maestro.module.css";

export function Maestro() {
  return (
    <section
      id="maestro"
      className={styles.maestro}
      aria-labelledby="titulo-maestro"
    >
      {/* FONDO MÓVIL */}
      <div className={styles.fondoMovil}>
        <Image
          src="/imagenes/Maestro/Movil/08-maestro-movil.webp"
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
          src="/imagenes/Maestro/Web/08-maestro-desktop.webp"
          alt=""
          width={9000}
          height={4500}
          sizes="(min-width: 768px) 100vw, 1px"
          className={styles.imagen}
        />
      </div>

      {/* CONTENIDO */}
      <div className={styles.contenido}>
        <div className={styles.encabezado}>
          <h2 id="titulo-maestro" className={styles.titulo}>
            <Image
              src="/imagenes/Maestro/08-maestro-mezcalero.png"
              alt="Maestro Mezcalero"
              width={1200}
              height={300}
              className={styles.imagenTitulo}
            />
          </h2>

          <Image
            src="/imagenes/Maestro/08-maestro-ivan-betancourt.png"
            alt="Iván Betancourt"
            width={1500}
            height={400}
            className={styles.imagenNombre}
          />

          <Image
            src="/imagenes/Maestro/08-maestro-sello-oaxaca.png"
            alt="Sello de Oaxaca, México"
            width={400}
            height={400}
            className={styles.imagenSello}
          />
        </div>

        <div className={styles.parrafos}>
          <p>
            Una larga trayectoria es la que llevó a Iván Betancourt
            del cultivo del agave al corazón del mezcal.
          </p>

          <p>
            Sin una tradición mezcalera heredada, emprendió su
            formación de la mano de distintos maestros Mezcaleros,
            encontrando en sus conocimientos técnicas y saberes
            ancestrales, así como los fundamentos para desarrollar
            una identidad propia.
          </p>

          <p>
            De este encuentro, entre experiencias y tradiciones,
            nació una visión particular del mezcal, en la que
            el respeto por sus raíces convive con la inquietud
            de explorar nuevas posibilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
