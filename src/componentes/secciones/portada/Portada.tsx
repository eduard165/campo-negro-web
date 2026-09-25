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
        bg-[url('/imagenes/portada/fondo-portada.png')]
        bg-cover
        bg-[66%_center]

        md:bg-[62%_center]

        lg:bg-center
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(10,7,5,0.72)_0%,rgba(10,7,5,0.50)_42%,rgba(10,7,5,0.20)_72%,rgba(10,7,5,0.08)_100%)]
        "
      />

      <Encabezado />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-[88%]
          max-w-[1700px]
          items-end
          pb-14
          pt-32

          sm:pb-16

          md:w-[90%]
          md:items-center
          md:py-28

          lg:w-[92%]
          lg:py-32
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[520px]
            flex-col
            items-start

            md:max-w-[600px]

            lg:max-w-[680px]
          "
        >
          <div
            className="
              mb-6
              w-[210px]

              sm:w-[245px]

              md:w-[290px]

              lg:w-[350px]
            "
          >
            <Image
              src="/imagenes/marca/logo-blanco.png"
              alt="Campo Negro"
              width={500}
              height={500}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <p
            className="
              m-0
              text-[10px]
              font-medium
              uppercase
              tracking-[0.42em]
              text-white/85

              sm:text-[11px]

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.48em]
            "
          >
            MEZCAL ARTESANAL
          </p>

          <div
            className="
              my-5
              h-px
              w-[52px]
              bg-white/50

              md:my-6
              md:w-[60px]
            "
          />

          <p
            className="
              m-0
              max-w-[310px]
              text-[22px]
              font-medium
              uppercase
              leading-[1.08]
              tracking-[0.04em]
              text-white

              sm:text-[24px]

              md:max-w-[420px]
              md:text-[30px]

              lg:max-w-[520px]
              lg:text-[36px]
            "
          >
            MOMENTOS QUE MERECEN SER
          </p>

          <p
            className="
              mt-1
              mb-0
              [font-family:var(--fuente-manuscrita)]
              text-[52px]
              leading-none
              text-white

              sm:text-[60px]

              md:text-[72px]

              lg:text-[88px]
            "
          >
            recordados
          </p>

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
              border-white/70
              px-5
              py-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white
              transition
              duration-300

              hover:bg-white
              hover:text-black

              sm:max-w-[350px]
              sm:px-6

              md:mt-9
              md:w-auto
              md:min-w-[360px]

              lg:min-w-[390px]
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