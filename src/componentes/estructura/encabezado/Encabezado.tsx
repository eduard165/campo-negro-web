import Image from "next/image";

import { enlacesNavegacion } from "@/datos/navegacion";

export function Encabezado() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex w-[92%] max-w-[1700px] items-center justify-between py-5">
        <a
          href="#inicio"
          aria-label="Ir al inicio de Campo Negro"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/imagenes/marca/logo-blanco.png"
            alt="Campo Negro"
            width={120}
            height={90}
            priority
            className="h-auto w-[105px] lg:w-[120px]"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {enlacesNavegacion.map((enlace) => (
            <a
              key={enlace.destino}
              href={enlace.destino}
              className="relative text-[11px] font-medium uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-5">
          <a
            href="#"
            aria-label="Instagram de Campo Negro"
            className="hidden h-5 w-5 items-center justify-center text-white/90 transition duration-300 hover:-translate-y-0.5 hover:text-white lg:flex"
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
            aria-label="Facebook de Campo Negro"
            className="hidden h-5 w-5 items-center justify-center text-white/90 transition duration-300 hover:-translate-y-0.5 hover:text-white lg:flex"
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
            className="group flex h-[42px] min-w-[138px] items-center justify-center gap-3 border border-white/70 px-4 text-[9px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-black sm:h-[46px] sm:min-w-[155px] sm:px-5 sm:text-[10px] lg:h-[48px] lg:min-w-[170px]"
          >
            CONTÁCTANOS

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}