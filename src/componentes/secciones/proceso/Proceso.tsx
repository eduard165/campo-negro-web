import Image from "next/image";

import estilos from "./Proceso.module.css";

const etapasProceso = [
  {
    nombre: "Agave",
    icono: "/imagenes/iconos/agave.png",
    alt: "Agave",
  },
  {
    nombre: "Cocimiento",
    icono: "/imagenes/iconos/arbol.png",
    alt: "Cocimiento del agave",
  },
  {
    nombre: "Molienda",
    icono: "/imagenes/iconos/copas.png",
    alt: "Molienda del agave",
  },
  {
    nombre: "Destilación",
    icono: "/imagenes/iconos/montana.png",
    alt: "Destilación del mezcal",
  },
  {
    nombre: "Campo Negro",
    icono: "/imagenes/iconos/limones.png",
    alt: "Mezcal Campo Negro",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className={estilos.proceso}>
      <div className={estilos.contenedor}>
        <div className={estilos.encabezado}>
          <p className={estilos.subtitulo}>
            NUESTRO PROCESO
          </p>

          <h2 className={estilos.titulo}>
            TRADICIÓN
            <br />
            EN CADA ETAPA
          </h2>
        </div>

        <div className={estilos.etapas}>
          {etapasProceso.map((etapa, indice) => (
            <div
              key={etapa.nombre}
              className={estilos.etapaContenedor}
            >
              <div className={estilos.etapa}>
                <div className={estilos.marco}>
                  <Image
                    src={etapa.icono}
                    alt={etapa.alt}
                    width={100}
                    height={100}
                    className={estilos.icono}
                  />
                </div>

                <p className={estilos.nombreEtapa}>
                  {etapa.nombre}
                </p>
              </div>

              {indice < etapasProceso.length - 1 && (
                <div
                  className={estilos.conector}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}