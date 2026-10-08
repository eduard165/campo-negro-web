
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const enlaces = [
  { nombre: "INICIO", href: "#inicio" },
  { nombre: "HISTORIA", href: "#legado" },
  { nombre: "ORIGEN", href: "#origen" },
  { nombre: "RITUAL", href: "#ritual" },
  { nombre: "PROCESO", href: "#proceso" },
  { nombre: "CONTACTO", href: "#contacto" },
];

export function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const [enlaceActivo, setEnlaceActivo] = useState<string | null>(null);

  // DETECTAR DESPLAZAMIENTO
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

  // CERRAR MENÚ AL PASAR A ESCRITORIO
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

  // BLOQUEAR SCROLL CON MENÚ MÓVIL ABIERTO
  useEffect(() => {
    if (!menuAbierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [menuAbierto]);

  const seleccionarEnlace = (href: string) => {
    setEnlaceActivo(href);
    setMenuAbierto(false);
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        w-full

        transition-[background-color,box-shadow,backdrop-filter]
        duration-500
        ease-in-out

        ${
          desplazado || menuAbierto
            ? "bg-[#1c1511]/75 backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-none shadow-none"
        }
      `}
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="
          relative
          z-50
          mx-auto
          flex
          w-[92%]
          max-w-[1500px]
          items-center
          justify-between
          gap-5

          py-2

          sm:py-2

          lg:justify-start
          lg:gap-8
          lg:py-2
        "
      >
        {/* LOGOTIPO */}
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
            duration-300
            ease-out

            hover:scale-105
            hover:-translate-y-0.5

            active:scale-95
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
              w-[48px]

              transition-[filter]
              duration-300

              group-hover/logo:drop-shadow-[0_0_10px_rgba(198,156,69,0.4)]

              sm:w-[58px]

              md:w-[70px]

              lg:w-[82px]

              xl:w-[90px]
            "
          />
        </a>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav
          aria-label="Navegación principal"
          className="
            hidden
            items-center
            justify-start
            gap-6

            lg:flex

            xl:gap-9
          "
        >
          {enlaces.map((enlace) => {
            const activo = enlaceActivo === enlace.href;

            return (
              <a
                key={enlace.nombre}
                href={enlace.href}
                onClick={() => seleccionarEnlace(enlace.href)}
                aria-current={activo ? "location" : undefined}
                className={`
                  group/enlace
                  relative
                  inline-flex
                  items-center
                  whitespace-nowrap
                  py-2

                  text-[13px]
                  font-medium

                  transition-[color,transform]
                  duration-300

                  hover:-translate-y-[2px]
                  hover:text-[#e3bd70]

                  focus-visible:text-[#e3bd70]

                  xl:text-[14px]

                  ${
                    activo
                      ? "text-[#e3bd70]"
                      : "text-white"
                  }
                `}
              >
                {enlace.nombre}

                {/* SUBRAYADO ANIMADO */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    bottom-[4px]
                    left-0
                    h-[1px]
                    w-full
                    origin-left
                    bg-[#c69c45]

                    transition-transform
                    duration-300

                    group-hover/enlace:scale-x-100

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

        {/* BOTÓN HAMBURGUESA */}
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil-campo-negro"
          onClick={() => setMenuAbierto((anterior) => !anterior)}
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

            hover:scale-105

            lg:hidden
          "
        >
          <span
            className={`
              h-[2px]
              w-7
              bg-white

              transition-transform
              duration-300

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
              bg-white

              transition-opacity
              duration-300

              ${menuAbierto ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              h-[2px]
              w-7
              bg-white

              transition-transform
              duration-300

              ${
                menuAbierto
                  ? "-translate-y-[8px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </div>

      {/* MENÚ MÓVIL */}
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
          gap-7

          bg-[#211b17]/96
          px-6
          backdrop-blur-xl

          transition-[opacity,visibility]
          duration-500

          lg:hidden

          ${
            menuAbierto
              ? "visible pointer-events-auto opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        {enlaces.map((enlace, indice) => {
          const activo = enlaceActivo === enlace.href;

          return (
            <a
              key={enlace.nombre}
              href={enlace.href}
              onClick={() => seleccionarEnlace(enlace.href)}
              tabIndex={menuAbierto ? 0 : -1}
              style={{
                transitionDelay: menuAbierto
                  ? `${80 + indice * 45}ms`
                  : "0ms",
              }}
              className={`
                text-[22px]
                font-medium
                tracking-[0.08em]

                transition-[opacity,transform,color]
                duration-500

                hover:scale-105
                hover:text-[#e3bd70]

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
