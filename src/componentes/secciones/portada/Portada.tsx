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

        bg-[url('/imagenes/portada/fondo-portada-movil2.png')]
        bg-cover
        bg-center

        md:bg-[url('/imagenes/portada/fondo-portada.png')]
        md:bg-[62%_center]

        lg:bg-center
      "
    >
      {/* El encabezado se mantiene exactamente como ya está */}
      <Encabezado />

      {/* CONTENIDO DE LA PORTADA */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-[88%]
          max-w-[1700px]
          items-center
          justify-start
          pb-12
          pt-32

          md:w-[90%]
          md:pb-16
          md:pt-36

          lg:w-[92%]
          lg:pb-20
          lg:pt-40
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[420px]
            flex-col
            items-center
            text-center

            sm:max-w-[460px]

            md:max-w-[500px]

            lg:ml-[2%]
            lg:max-w-[500px]

            xl:ml-[4%]
          "
        >
          {/* LOGO PRINCIPAL */}
          <div
            className="
              mb-6
              w-[170px]

              sm:w-[190px]

              md:w-[210px]

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
              text-[10px]
              font-medium
              uppercase
              tracking-[0.42em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.9)]

              sm:text-[11px]

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
              my-5
              h-px
              w-[52px]
              bg-white

              shadow-[0_2px_6px_rgba(0,0,0,0.9)]

              md:my-6
              md:w-[60px]
            "
          />

          {/* MOMENTOS QUE MERECEN SER RECORDADOS */}
          <div
            className="
              w-full
              max-w-[330px]

              sm:max-w-[360px]

              md:max-w-[400px]

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
              max-w-[320px]
              items-center
              justify-between

              border
              border-white/80

              bg-black/10

              px-5
              py-4

              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_4px_10px_rgba(0,0,0,0.85)]

              shadow-[0_6px_18px_rgba(0,0,0,0.35)]

              transition
              duration-300

              hover:bg-white
              hover:text-black
              hover:[text-shadow:none]

              sm:max-w-[350px]
              sm:px-6

              md:mt-9
              md:max-w-[370px]

              lg:max-w-[390px]
              lg:px-7
              lg:py-[18px]
              lg:text-[11px]
            "
          >
            CONOCE NUESTRA VARIEDAD

            <span
              className="
                ml-5
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