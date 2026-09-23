import Image from "next/image";

import { enlacesNavegacion } from "@/datos/navegacion";

import estilos from "./Encabezado.module.css";

export function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <a
          href="#inicio"
          className={estilos.marca}
          aria-label="Ir al inicio de Campo Negro"
        >
          <Image
            src="/imagenes/marca/logo-blanco.png"
            alt="Campo Negro"
            width={120}
            height={90}
            priority
            className={estilos.logo}
          />
        </a>

        <nav
          className={estilos.navegacion}
          aria-label="Navegación principal"
        >
          {enlacesNavegacion.map((enlace) => (
         <a
          key={enlace.destino}
          href={enlace.destino}
          className={estilos.enlace}
        >
          {enlace.etiqueta}
        </a>
        ))}
        </nav>

        <div className={estilos.acciones}>
          <a
            href="#"
            className={estilos.redSocial}
            aria-label="Instagram de Campo Negro"
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

              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
            </svg>
          </a>

          <a
            href="#"
            className={estilos.redSocial}
            aria-label="Facebook de Campo Negro"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z"
              />
            </svg>
          </a>

          <a
            href="#contacto"
            className={estilos.botonContacto}
          >
            CONTÁCTANOS
            <span className={estilos.flecha}>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}