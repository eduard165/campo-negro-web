import Image from "next/image";

import estilos from "./PiePagina.module.css";

export function PiePagina() {
  return (
    <footer id="contacto" className={estilos.piePagina}>
      <div className={estilos.contacto}>
        <div className={estilos.oscurecimiento} />

        <div className={estilos.contenedorContacto}>
          <div className={estilos.mensaje}>
            <h2 className={estilos.titulo}>
              EL MEZCAL
              <br />
              TAMBIÉN ES
              <br />
              ENCUENTRO
            </h2>

            <div className={estilos.lineaTitulo} />
          </div>

          <div className={estilos.centro}>

            <div className={estilos.lineaRedes} />

            <div className={estilos.redes}>
              <a
                href="#"
                aria-label="Instagram de Campo Negro"
                className={estilos.redSocial}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="WhatsApp de Campo Negro"
                className={estilos.redSocial}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.3 21.7l5.28-1.38A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.13.82.84-3.05-.19-.31A8 8 0 1 1 12 19.7Zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook de Campo Negro"
                className={estilos.redSocial}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={estilos.marcas}>
            <div
              className={estilos.divisorVertical}
              aria-hidden="true"
            />

            <Image
              src="/imagenes/marca/ivan-betancourt.png"
              alt="Iván Betancourt"
              width={260}
              height={110}
              className={estilos.imagenIvan}
            />

            <Image
              src="/imagenes/marca/logo-principal.png"
              alt="Campo Negro 1430"
              width={130}
              height={130}
              className={estilos.logoFinal}
            />
          </div>
        </div>
      </div>

      <div className={estilos.inferior}>
        <div className={estilos.contenedorInferior}>
          <Image
            src="/imagenes/marca/logo-principal.png"
            alt="Campo Negro"
            width={38}
            height={38}
            className={estilos.logoInferior}
          />

          <p className={estilos.derechos}>
            © {new Date().getFullYear()} Campo Negro 1430
          </p>

          <p className={estilos.descripcionInferior}>
            Mezcal artesanal · Oaxaca, México
          </p>
        </div>
      </div>
    </footer>
  );
}