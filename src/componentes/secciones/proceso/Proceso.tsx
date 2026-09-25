import Image from "next/image";

const etapasProceso = [
  {
    nombre: "Cocimiento",
    descripcion:
      "Horno de pozo recubierto con piedra, leña de guamúchil y encino.",
    imagen: "/imagenes/iconos/Destilacion2.png",
    alt: "Cocimiento del agave en horno de pozo",
  },
  {
    nombre: "Molienda",
    descripcion:
      "Tahona de cantera jalada por caballo.",
    imagen: "/imagenes/iconos/Molienda.png",
    alt: "Molienda en tahona de cantera",
  },
  {
    nombre: "Destilación",
    descripcion:
      "Doble en alambique de cobre.",
    imagen: "/imagenes/iconos/Cocimiento.png",
    alt: "Destilación en alambique de cobre",
  },
];

export function Proceso() {
  return (
    <section
      id="proceso"
      className="
        w-full
        overflow-hidden
        bg-[var(--color-cal)]
        text-[#3b2d24]
      "
    >
      <div
        className="
          mx-auto
          w-[90%]
          max-w-[1600px]
          py-14

          md:w-[92%]
          md:py-16

          lg:py-20
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <p
            className="
              mb-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-[#a76532]

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRO PROCESO
          </p>

          <h2
            className="
              m-0
              [font-family:var(--fuente-condensada)]
              text-[46px]
              font-normal
              uppercase
              leading-[0.9]
              text-[#3b2d24]

              sm:text-[54px]

              md:text-[62px]

              lg:text-[72px]
            "
          >
            TRADICIÓN
            <br />
            EN CADA ETAPA
          </h2>

          <div
            className="
              mt-6
              h-[3px]
              w-[72px]
              bg-[var(--color-oro-maguey)]
            "
          />
        </div>

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-[1200px]
            grid-cols-1
            gap-14

            md:grid-cols-3
            md:gap-8

            lg:mt-16
            lg:gap-12
          "
        >
          {etapasProceso.map((etapa, indice) => (
            <div
              key={etapa.nombre}
              className="
                group
                relative
                flex
                flex-col
                items-center
                text-center
              "
            >
              <div
                className="
                  flex
                  h-[170px]
                  w-[190px]
                  items-center
                  justify-center
                  rounded-[26px]
                  border
                  border-[#938a7f]/45

                  transition-all
                  duration-300
                  ease-out

                  group-hover:border-[var(--color-oro-maguey)]
                  group-hover:shadow-[0_8px_24px_rgba(198,156,69,0.14)]

                  sm:h-[185px]
                  sm:w-[205px]

                  lg:h-[200px]
                  lg:w-[220px]
                "
              >
                <Image
                  src={etapa.imagen}
                  alt={etapa.alt}
                  width={320}
                  height={320}
                  className="
                    h-[125px]
                    w-[145px]
                    object-contain

                    transition-transform
                    duration-300
                    ease-out

                    group-hover:-translate-y-1
                    group-hover:scale-[1.03]

                    sm:h-[135px]
                    sm:w-[155px]

                    lg:h-[145px]
                    lg:w-[170px]
                  "
                />
              </div>

              <h3
                className="
                  mt-5
                  mb-0
                  [font-family:var(--fuente-condensada)]
                  text-[28px]
                  font-normal
                  uppercase
                  leading-none
                  text-[#3b2d24]

                  transition-colors
                  duration-300

                  group-hover:text-[var(--color-oro-maguey)]

                  lg:text-[32px]
                "
              >
                {etapa.nombre}
              </h3>

              <p
                className="
                  mt-3
                  mb-0
                  max-w-[300px]
                  text-center
                  text-[14px]
                  leading-[1.6]
                  text-[#55463c]

                  lg:text-[15px]
                "
              >
                {etapa.descripcion}
              </p>

              {indice < etapasProceso.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-9
                    left-1/2
                    h-[28px]
                    w-px
                    -translate-x-1/2
                    bg-[#938a7f]/50

                    after:absolute
                    after:bottom-0
                    after:left-1/2
                    after:h-[7px]
                    after:w-[7px]
                    after:-translate-x-1/2
                    after:rotate-[135deg]
                    after:border-r
                    after:border-t
                    after:border-[#938a7f]/70

                    md:-right-6
                    md:bottom-auto
                    md:left-auto
                    md:top-[100px]
                    md:h-px
                    md:w-[48px]
                    md:translate-x-0

                    md:after:bottom-auto
                    md:after:left-auto
                    md:after:right-0
                    md:after:top-1/2
                    md:after:-translate-y-1/2
                    md:after:translate-x-0
                    md:after:rotate-45
                  "
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="
            mx-auto
            mt-16
            flex
            max-w-[720px]
            flex-col
            items-center
            border-t
            border-[#938a7f]/30
            pt-10
            text-center

            md:mt-20
            md:pt-12
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#a76532]

              md:text-[12px]
            "
          >
            MAESTRO MEZCALERO
          </p>

          <Image
            src="/imagenes/marca/ivan-betancourt.png"
            alt="Iván Betancourt, maestro mezcalero"
            width={360}
            height={140}
            className="
              h-auto
              w-[200px]
              object-contain

              transition-transform
              duration-300
              ease-out

              hover:scale-[1.03]

              sm:w-[230px]

              md:w-[260px]
            "
          />
        </div>
      </div>
    </section>
  );
}