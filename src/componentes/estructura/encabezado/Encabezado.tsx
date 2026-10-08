
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const enlaces = [
  { nombre: "INICIO", href: "#inicio" },
  { nombre: "LEGADO", href: "#legado" },
  { nombre: "IDENTIDAD", href: "#identidad" },
  { nombre: "ORIGEN", href: "#origen" },
  { nombre: "RITUAL", href: "#ritual" },
  { nombre: "PROCESO", href: "#proceso" },
  { nombre: "AUTOR", href: "#autor" },
  { nombre: "CONTACTO", href: "#contacto" },
];

export function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const [enlaceActivo, setEnlaceActivo] = useState<string | null>(
    null
  );

  // Detectar cuando el usuario baja por la página.
  useEffect(() => {
    const detectarScroll = () => {
      setDesplazado(window.scrollY > 30);
    };

    detectarScroll();

    window.addEventListener("scroll", detectarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, []);

  // Cerrar el menú móvil si se cambia a escritorio.
  useEffect(() => {
    const cerrarEnEscritorio = () => {
      if (window.innerWidth >= 1024) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("resize", cerrarEnEscritorio);

    return () => {
      window.removeEventListener("resize", cerrarEnEscritorio);
    };
  }, []);

  const seleccionarEnlace = (href: string) => {
    setEnlaceActivo(href);
    setMenuAbierto(false);
  };

  return (
    <header
      className={`
        group
        fixed
        inset-x-0
        top-0
        z-50
        w-full

        transition-[background-color,box-shadow,backdrop-filter]
        duration-500
        ease-in-out

        motion-reduce:transition-none

        ${
          desplazado || menuAbierto
            ? `
              bg-[#1c1511]/80
              shadow-[0_8px_35px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            `
            : `
              bg-transparent
              shadow-none
              backdrop-blur-none

              lg:hover:bg-[#1c1511]/75
              lg:hover:backdrop-blur-md

              lg:focus-within:bg-[#1c1511]/75
              lg:focus-within:backdrop-blur-md
            `
        }
      `}
    >
      {/* =====================================
          CONTENEDOR PRINCIPAL
      ===================================== */}
      <div
        className="
          relative
          z-50
          mx-auto
          flex
          w-[calc(100%-24px)]
          max-w-[1500px]
          items-center
          justify-between
          gap-5
          py-3

          transition-[padding]
          duration-500

          sm:w-[90%]
          sm:py-4

          md:w-[92%]
          md:py-6

          lg:justify-start
          lg:gap-8
          lg:py-7
        "
      >
        {/* =====================================
            LOGOTIPO
        ===================================== */}
        <a
          href="#inicio"
          aria-label="Campo Negro - Inicio"
          onClick={() => seleccionarEnlace("#inicio")}
          className="
            group/logo
            relative
            z-50
            shrink-0

            transition-transform
            duration-500
            ease-out

            hover:-translate-y-0.5
            hover:scale-[1.045]

            active:scale-[0.97]

            motion-reduce:transition-none
          "
        >
          <Image
            src="/imagenes/portada/logo-blanco.png"
            alt="Campo Negro 1430"
            width={180}
            height={150}
            priority
            className="
              h-auto
              w-[52px]

              transition-[filter,opacity]
              duration-500

              group-hover/logo:drop-shadow-[0_0_12px_rgba(198,156,69,0.45)]

              sm:w-[70px]

              md:w-[105px]

              lg:w-[145px]
            "
          />
        </a>

        {/* =====================================
            NAVEGACIÓN ESCRITORIO
        ===================================== */}
        <nav
          aria-label="Navegación principal"
          className="
            hidden
            items-center
            justify-start
            gap-5

            lg:flex

            xl:gap-8
          "
        >
          {enlaces.map((enlace) => {
            const activo = enlaceActivo === enlace.href;

            return (
              <a
                key={enlace.nombre}
                href={enlace.href}
                onClick={() =>
                  seleccionarEnlace(enlace.href)
                }
                aria-current={activo ? "location" : undefined}
                className={`
                  group/enlace
                  relative
                  inline-flex
                  items-center
                  whitespace-nowrap
                  pb-1

                  text-[13px]
                  font-medium

                  transition-[color,transform]
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:text-[#e3bd70]

                  focus-visible:text-[#e3bd70]
                  focus-visible:outline-none

                  motion-reduce:transition-none

                  xl:text-[15px]

                  ${
                    activo
                      ? "text-[#e3bd70]"
                      : "text-white"
                  }
                `}
              >
                {enlace.nombre}

                {/* LÍNEA DORADA ANIMADA */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[1px]
                    w-full
                    origin-left
                    bg-[#c69c45]

                    transition-transform
                    duration-300
                    ease-out

                    group-hover/enlace:scale-x-100
                    group-focus-visible/enlace:scale-x-100

                    ${
                      activo
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* =====================================
            BOTÓN HAMBURGUESA
        ===================================== */}
        <button
          type="button"
          aria-label={
            menuAbierto ? "Cerrar menú" : "Abrir menú"
          }
          aria-expanded={menuAbierto}
          aria-controls="menu-movil-campo-negro"
          onClick={() =>
            setMenuAbierto((anterior) => !anterior)
          }
          className="
            group/boton
            relative
            z-50
            flex
            h-11
            w-11
            shrink-0
            flex-col
            items-center
            justify-center
            gap-[6px]

            transition-transform
            duration-300

            hover:scale-110
            active:scale-95

            lg:hidden
          "
        >
          <span
            className={`
              h-[2px]
              w-7
              rounded-full
              bg-white

              transition-[transform,background-color]
              duration-300

              group-hover/boton:bg-[#e3bd70]

              ${
                menuAbierto
                  ? "translate-y-[8px] rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              h-[2px]
              w-7
              rounded-full
              bg-white

              transition-[opacity,background-color]
              duration-300

              group-hover/boton:bg-[#e3bd70]

              ${menuAbierto ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              h-[2px]
              w-7
              rounded-full
              bg-white

              transition-[transform,background-color]
              duration-300

              group-hover/boton:bg-[#e3bd70]

              ${
                menuAbierto
                  ? "-translate-y-[8px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </div>

      {/* =====================================
          MENÚ DESPLEGABLE MÓVIL
      ===================================== */}
      <nav
        id="menu-movil-campo-negro"
        aria-label="Navegación móvil"
        aria-hidden={!menuAbierto}
        className={`
          fixed
          inset-0
          z-40
          flex
          flex-col
          items-center
          justify-center
          gap-6
          bg-[#211b17]/96
          px-6
          backdrop-blur-xl

          transition-[opacity,visibility]
          duration-500
          ease-in-out

          motion-reduce:transition-none

          lg:hidden

          ${
            menuAbierto
              ? `
                visible
                pointer-events-auto
                opacity-100
              `
              : `
                invisible
                pointer-events-none
                opacity-0
              `
          }
        `}
      >
        {enlaces.map((enlace, indice) => {
          const activo = enlaceActivo === enlace.href;

          return (
            <a
              key={enlace.nombre}
              href={enlace.href}
              onClick={() =>
                seleccionarEnlace(enlace.href)
              }
              tabIndex={menuAbierto ? 0 : -1}
              style={{
                transitionDelay: menuAbierto
                  ? `${80 + indice * 45}ms`
                  : "0ms",
              }}
              className={`
                relative
                text-[22px]
                font-medium
                tracking-[0.08em]

                transition-[opacity,transform,color]
                duration-500
                ease-out

                hover:scale-105
                hover:text-[#e3bd70]

                active:scale-95

                motion-reduce:transition-none

                ${
                  activo
                    ? "text-[#e3bd70]"
                    : "text-white"
                }

                ${
                  menuAbierto
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
            >
              {enlace.nombre}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
