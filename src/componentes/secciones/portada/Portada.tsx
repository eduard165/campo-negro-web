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
            rgba(8,5,3,0.52)_0%,
            rgba(8,5,3,0.38)_30%,
            rgba(8,5,3,0.18)_48%,
            rgba(8,5,3,0.05)_64%,
            rgba(8,5,3,0)_80%
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

      {/* BOTELLA - SOLO MÓVIL */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[8%]
          right-[-20%]
          z-[2]

          w-[100%]
          max-w-[450px]

          sm:right-[-30%]
          sm:w-[82%]
          sm:max-w-[470px]

          md:hidden
        "
      >
        <Image
          src="/imagenes/portada/botella-portada.png"
          alt=""
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

      <Encabezado />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-[90%]
          max-w-[1700px]
          items-center
          justify-start
          pb-10
          pt-28

          sm:w-[88%]

          md:w-[90%]
          md:pb-16
          md:pt-36

          lg:w-[92%]
          lg:pb-20
          lg:pt-40
        "
      >
        {/* COLUMNA IZQUIERDA */}
        <div
          className="
            flex
            w-full
            max-w-[225px]
            flex-col
            items-center
            text-center
            translate-x-[-5%]
            sm:max-w-[270px]

            md:max-w-[340px]

            lg:ml-[2%]
            lg:max-w-[500px]

            xl:ml-[4%]
          "
        >
          {/* LOGO */}
          <div
            className="
              mb-5
              flex
              w-full
              justify-center
            "
          >
            <div
              className="
                w-[175px]

                sm:w-[190px]

                md:w-[205px]

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
          </div>

          {/* MEZCAL ARTESANAL */}
          <p
            className="
              m-0
              [font-family:var(--fuente-texto)]
              text-[9px]
              font-medium
              uppercase
              tracking-[0.34em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.9)]

              sm:text-[10px]

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.48em]
            "
          >
            MEZCAL ARTESANAL
          </p>

          {/* LÍNEA */}
          <div
            className="
              my-4
              h-px
              w-[50px]
              bg-white

              shadow-[0_2px_6px_rgba(0,0,0,0.9)]

              md:my-5
              md:w-[58px]

              lg:my-6
              lg:w-[60px]
            "
          />

          {/* MOMENTOS */}
          <div
            className="
              flex
              w-full
              justify-center
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
                max-w-[225px]
                object-contain

                drop-shadow-[0_3px_3px_rgba(0,0,0,1)]
                drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]

                sm:max-w-[270px]

                md:max-w-[330px]

                lg:max-w-[430px]
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
              max-w-[225px]
              items-center
              justify-between

              bg-[var(--color-oro-maguey)]

              px-5
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

              sm:max-w-[270px]
              sm:px-6
              sm:text-[9px]

              md:mt-8
              md:max-w-[330px]

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
      </div>
    </section>
  );
}