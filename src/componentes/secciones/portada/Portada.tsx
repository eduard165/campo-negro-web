import Image from "next/image";

import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";

export function Portada() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden

        bg-[url('/imagenes/portada/fondo-portada-movil-sin-botella.png')]
        bg-cover
        bg-center
        bg-no-repeat

        md:bg-[url('/imagenes/portada/fondo-portada.png')]
        md:bg-[62%_center]

        lg:bg-center
      "
    >
      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-[1]

          bg-[linear-gradient(
            90deg,
            rgba(8,5,3,0.50)_0%,
            rgba(8,5,3,0.34)_30%,
            rgba(8,5,3,0.16)_50%,
            rgba(8,5,3,0.04)_68%,
            rgba(8,5,3,0)_82%
          )]

          md:bg-[linear-gradient(
            90deg,
            rgba(8,5,3,0.48)_0%,
            rgba(8,5,3,0.28)_38%,
            rgba(8,5,3,0.08)_62%,
            rgba(8,5,3,0)_78%
          )]

          lg:bg-transparent
        "
      />

      <Encabezado />

      {/* =========================
          MÓVIL
      ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[100svh]
          w-[94%]
          grid-cols-[0.9fr_1.1fr]
          items-end
          gap-1
          pb-8
          pt-28

          sm:w-[92%]
          sm:grid-cols-[0.95fr_1.05fr]

          md:hidden
        "
      >
        {/* COLUMNA IZQUIERDA */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            pb-10
            text-center
          "
        >
          {/* LOGO PRINCIPAL */}
          <div
            className="
              mb-5
              w-[155px]

              sm:w-[175px]
            "
          >
            <Image
              src="/imagenes/marca/logo-vertical-blanco.png"
              alt="Campo Negro 1430"
              width={500}
              height={500}
              priority
              className="
                h-auto
                w-full
                object-contain

                drop-shadow-[0_3px_3px_rgba(0,0,0,0.95)]
                drop-shadow-[0_8px_14px_rgba(0,0,0,0.75)]
              "
            />
          </div>

          {/* MEZCAL ARTESANAL */}
          <p
            className="
              m-0
              [font-family:var(--fuente-texto)]
              text-[9px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.9)]

              sm:text-[10px]
            "
          >
            MEZCAL ARTESANAL
          </p>

          {/* LÍNEA */}
          <div
            className="
              my-4
              h-px
              w-[48px]
              bg-white

              shadow-[0_2px_6px_rgba(0,0,0,0.9)]
            "
          />

          {/* MOMENTOS */}
          <div
            className="
              w-full
              max-w-[220px]

              sm:max-w-[250px]
            "
          >
            <Image
              src="/imagenes/portada/Momentos.png"
              alt="Momentos que merecen ser recordados"
              width={1600}
              height={1000}
              className="
                h-auto
                w-full
                object-contain

                drop-shadow-[0_3px_3px_rgba(0,0,0,1)]
                drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]
              "
            />
          </div>

          {/* BOTÓN */}
          <a
            href="#mezcal"
            className="
              group
              mt-7
              flex
              w-full
              max-w-[220px]
              items-center
              justify-between

              bg-[var(--color-oro-maguey)]

              px-4
              py-4

              [font-family:var(--fuente-texto)]
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.11em]
              text-white

              shadow-[0_6px_18px_rgba(0,0,0,0.35)]

              transition
              duration-300

              hover:brightness-105

              sm:max-w-[250px]
              sm:px-5
              sm:text-[9px]
            "
          >
            CONOCE NUESTRA VARIEDAD

            <span
              className="
                ml-3
                text-base
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* COLUMNA DERECHA - BOTELLA */}
        <div
          className="
            flex
            h-full
            items-end
            justify-end
          "
        >
          <div
            className="
              w-[190%]
              max-w-none

              sm:w-[175%]
            "
          >
            <Image
              src="/imagenes/portada/botella-portada.png"
              alt="Botella de Mezcal Campo Negro"
              width={900}
              height={1600}
              priority
              className="
                h-auto
                w-full
                object-contain
                object-bottom

                drop-shadow-[-8px_4px_18px_rgba(0,0,0,0.24)]
              "
            />
          </div>
        </div>
      </div>

      {/* =========================
          TABLET / DESKTOP
      ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          min-h-[100svh]
          w-[90%]
          max-w-[1700px]
          items-center
          justify-start
          pb-16
          pt-36

          md:flex

          lg:w-[92%]
          lg:pb-20
          lg:pt-40
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[340px]
            flex-col
            items-center
            text-center

            lg:ml-[2%]
            lg:max-w-[500px]

            xl:ml-[4%]
          "
        >
          {/* LOGO */}
          <div
            className="
              mb-5
              w-[205px]

              lg:w-[220px]
            "
          >
            <Image
              src="/imagenes/marca/logo-vertical-blanco.png"
              alt="Campo Negro 1430"
              width={500}
              height={500}
              priority
              className="
                h-auto
                w-full
                object-contain

                drop-shadow-[0_3px_3px_rgba(0,0,0,0.95)]
                drop-shadow-[0_8px_14px_rgba(0,0,0,0.75)]
              "
            />
          </div>

          {/* MEZCAL ARTESANAL */}
          <p
            className="
              m-0
              [font-family:var(--fuente-texto)]
              text-[12px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.9)]

              lg:text-[13px]
              lg:tracking-[0.48em]
            "
          >
            MEZCAL ARTESANAL
          </p>

          {/* LÍNEA */}
          <div
            className="
              my-5
              h-px
              w-[58px]
              bg-white

              shadow-[0_2px_6px_rgba(0,0,0,0.9)]

              lg:my-6
              lg:w-[60px]
            "
          />

          {/* MOMENTOS */}
          <div
            className="
              w-full
              max-w-[330px]

              lg:max-w-[430px]
            "
          >
            <Image
              src="/imagenes/portada/Momentos.png"
              alt="Momentos que merecen ser recordados"
              width={1600}
              height={1000}
              className="
                h-auto
                w-full
                object-contain

                drop-shadow-[0_3px_3px_rgba(0,0,0,1)]
                drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]
              "
            />
          </div>

          {/* BOTÓN */}
          <a
            href="#mezcal"
            className="
              group
              mt-8
              flex
              w-full
              max-w-[330px]
              items-center
              justify-between

              bg-[var(--color-oro-maguey)]

              px-6
              py-4

              [font-family:var(--fuente-texto)]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-white

              shadow-[0_6px_18px_rgba(0,0,0,0.35)]

              transition
              duration-300

              hover:brightness-105

              lg:mt-9
              lg:max-w-[390px]
              lg:px-7
              lg:py-[18px]
              lg:text-[11px]
            "
          >
            CONOCE NUESTRA VARIEDAD

            <span
              className="
                ml-4
                text-base
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}