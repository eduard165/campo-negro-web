import Image from "next/image";

const etapasProceso = [
  {
    nombre: "Agave",
    icono: "/imagenes/iconos/agave.png",
    alt: "Agave",
  },
  {
    nombre: "Cocimiento",
    icono: "/imagenes/iconos/arbol.png",
    alt: "Cocimiento del agave",
  },
  {
    nombre: "Molienda",
    icono: "/imagenes/iconos/copas.png",
    alt: "Molienda del agave",
  },
  {
    nombre: "Destilación",
    icono: "/imagenes/iconos/montana.png",
    alt: "Destilación del mezcal",
  },
  {
    nombre: "Campo Negro",
    icono: "/imagenes/iconos/limones.png",
    alt: "Mezcal Campo Negro",
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
        py-14
        text-[#3b2d24]

        md:py-16

        lg:py-[90px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-[88%]
          max-w-[1700px]
          flex-col
          items-center

          md:w-[90%]

          lg:w-[92%]
        "
      >
        <div className="flex flex-col items-center text-center">
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
              relative
              m-0
              [font-family:Georgia,Times_New_Roman,serif]
              text-[38px]
              font-normal
              leading-[0.96]
              tracking-[-0.02em]

              after:absolute
              after:left-1/2
              after:top-[calc(100%+22px)]
              after:h-[3px]
              after:w-[64px]
              after:-translate-x-1/2
              after:bg-[var(--color-oro-maguey)]

              sm:text-[44px]

              md:text-[50px]

              lg:text-[58px]
            "
          >
            TRADICIÓN
            <br />
            EN CADA ETAPA
          </h2>
        </div>

        <div
          className="
            mt-16
            flex
            w-full
            flex-col
            items-center

            md:mt-20

            lg:mt-[88px]
            lg:flex-row
            lg:justify-between
          "
        >
          {etapasProceso.map((etapa, indice) => (
            <div
              key={etapa.nombre}
              className="
                flex
                flex-col
                items-center

                lg:flex-1
                lg:flex-row
              "
            >
              <div
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-[92px]
                    w-[110px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#938a7f]/50

                    transition
                    duration-300

                    group-hover:border-[var(--color-oro-maguey)]

                    sm:h-[102px]
                    sm:w-[122px]

                    lg:h-[118px]
                    lg:w-[140px]
                    lg:rounded-[24px]
                    lg:border-2
                  "
                >
                  <Image
                    src={etapa.icono}
                    alt={etapa.alt}
                    width={100}
                    height={100}
                    className="
                      h-[68px]
                      w-[68px]
                      object-contain
                      opacity-80

                      transition
                      duration-300

                      group-hover:scale-110
                      group-hover:opacity-100

                      sm:h-[76px]
                      sm:w-[76px]

                      lg:h-[100px]
                      lg:w-[100px]
                    "
                  />
                </div>

                <p
                  className="
                    mt-3
                    mb-0
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#55463c]

                    lg:mt-4
                    lg:text-[15px]
                  "
                >
                  {etapa.nombre}
                </p>
              </div>

              {indice < etapasProceso.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    relative
                    my-4
                    h-[28px]
                    w-px
                    bg-[#938a7f]/50

                    after:absolute
                    after:bottom-0
                    after:left-1/2
                    after:h-[7px]
                    after:w-[7px]
                    after:-translate-x-1/2
                    after:rotate-[135deg]
                    after:border-t
                    after:border-r
                    after:border-[#938a7f]/70

                    sm:h-[34px]

                    lg:mx-5
                    lg:my-0
                    lg:h-px
                    lg:flex-1
                    lg:bg-[#938a7f]/50

                    lg:after:bottom-auto
                    lg:after:left-auto
                    lg:after:right-0
                    lg:after:top-1/2
                    lg:after:-translate-y-1/2
                    lg:after:translate-x-0
                    lg:after:rotate-45
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}