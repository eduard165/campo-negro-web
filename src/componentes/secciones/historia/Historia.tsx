import Image from "next/image";

import estilos from "./Historia.module.css";

export function Historia() {
  return (
    <section id="historia" className={estilos.historia}>
      <div className={estilos.imagenContenedor}>
        <Image
          src="/imagenes/historia/historia.png"
          alt="Fachada de Campo Negro en Ejutla de Crespo"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={estilos.imagen}
        />
      </div>

      <div className={estilos.informacion}>
        <div className={estilos.contenido}>
          <p className={estilos.subtitulo}>
            NUESTRA HISTORIA
          </p>

          <h2 className={estilos.titulo}>
            ENTRE MUROS,
            <br />
            NACE LA TRADICIÓN
            </h2>

          <div className={estilos.linea} />

          <p className={estilos.texto}>
            Entre muros de cantera y manos que conocen el agave,
            Campo Negro conserva el carácter de Ejutla de Crespo
            y la memoria de una tradición viva.
          </p>

          <p className={estilos.fraseFinal}>
            Cada espacio guarda una historia.
          </p>
        </div>
      </div>
    </section>
  );
}