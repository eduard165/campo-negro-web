"use client";

import { useState } from "react";
import Image from "next/image";

import { enlacesNavegacion } from "@/datos/navegacion";

export function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div
        className="
          relative
          z-50
          mx-auto
          flex
          w-[92%]
          max-w-[1700px]
          items-center
          justify-between
          py-4

          lg:py-5
        "
      >
        {/* LOGO */}
        <a
          href="#inicio"
          aria-label="Ir al inicio de Campo Negro"
          onClick={cerrarMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/imagenes/marca/logo-blanco.png"
            alt="Campo Negro"
            width={120}
            height={90}
            priority
            className="
              h-auto
              w-[72px]

              sm:w-[78px]

              md:w-[84px]

              lg:w-[90px]
            "
          />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav
          aria-label="Navegación principal"
          className="
            hidden
            items-center
            gap-8

            lg:flex

            xl:gap-10
          "
        >
          {enlacesNavegacion.map((enlace) => (
            <a
              key={enlace.destino}
              href={enlace.destino}
              className="
                relative
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/85
                transition-colors
                duration-300

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-px
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300

                hover:text-white
                hover:after:w-full
              "
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>

        {/* DERECHA DESKTOP */}
        <div
          className="
            hidden
            items-center
            gap-4

            lg:flex
            lg:gap-5
          "
        >
          <a
            href="#"
            aria-label="Instagram de Campo Negro"
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              text-white/90
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-white
            "
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
            aria-label="Facebook de Campo Negro"
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              text-white/90
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-white
            "
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
            className="
              group
              flex
              h-[46px]
              min-w-[160px]
              items-center
              justify-center
              gap-3
              bg-[var(--color-oro-maguey)]
              px-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white
              transition
              duration-300

              hover:bg-[#b58b3d]
            "
          >
            CONTÁCTANOS

            <span
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((estado) => !estado)}
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            border
            border-white/40
            text-white
            transition
            duration-300

            hover:border-white

            lg:hidden
          "
        >
          <span
            className={`
              absolute
              h-px
              w-5
              bg-white
              transition-all
              duration-300

              ${
                menuAbierto
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-[6px]"
              }
            `}
          />

          <span
            className={`
              absolute
              h-px
              w-5
              bg-white
              transition-all
              duration-300

              ${
                menuAbierto
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          <span
            className={`
              absolute
              h-px
              w-5
              bg-white
              transition-all
              duration-300

              ${
                menuAbierto
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-[6px]"
              }
            `}
          />
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`
          absolute
          left-0
          top-0
          z-40
          w-full
          overflow-hidden
          bg-[#0c0806]/96
          backdrop-blur-md
          transition-all
          duration-500

          ${
            menuAbierto
              ? "max-h-[100svh] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }

          lg:hidden
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-[100svh]
            w-[88%]
            flex-col
            justify-center
            pt-24
          "
        >
          {/* ENLACES */}
          <nav
            aria-label="Navegación móvil"
            className="
              flex
              flex-col
              items-start
            "
          >
            {enlacesNavegacion.map((enlace, indice) => (
              <a
                key={enlace.destino}
                href={enlace.destino}
                onClick={cerrarMenu}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-white/15
                  py-5
                  text-[18px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition
                  duration-300

                  hover:pl-2
                  hover:text-[var(--color-oro-maguey)]
                "
              >
                <span>{enlace.etiqueta}</span>

                <span
                  className="
                    text-[11px]
                    font-normal
                    tracking-normal
                    text-white/35
                  "
                >
                  {String(indice + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          {/* CONTACTO */}
          <a
            href="#contacto"
            onClick={cerrarMenu}
            className="
              group
              mt-8
              flex
              w-full
              items-center
              justify-between
              bg-[var(--color-oro-maguey)]
              px-6
              py-5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white
              transition
              duration-300

              hover:bg-[#b58b3d]
            "
          >
            CONTÁCTANOS

            <span
              className="
                text-lg
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

          {/* REDES */}
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-7
            "
          >
            <a
              href="#"
              aria-label="Instagram de Campo Negro"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                text-white/80
                transition
                duration-300

                hover:text-[var(--color-oro-maguey)]
              "
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
              aria-label="Facebook de Campo Negro"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                text-white/80
                transition
                duration-300

                hover:text-[var(--color-oro-maguey)]
              "
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
      </div>
    </header>
  );
}