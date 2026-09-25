import Image from "next/image";

const valoresEsencia = [
  {
    titulo: "Tierra",
    icono: "/imagenes/iconos/agave.png",
    alt: "Agave",
  },
  {
    titulo: "Manos que inspiran",
    icono: "/imagenes/iconos/montana.png",
    alt: "Montañas de Oaxaca",
  },
  {
    titulo: "Momentos que unen",
    icono: "/imagenes/iconos/copas.png",
    alt: "Copas de mezcal",
  },
];

export function Esencia() {
  return (
    <section
      id="esencia"
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
          grid
          w-[88%]
          max-w-[1700px]
          grid-cols-1
          items-center
          gap-10
          py-16

          md:w-[90%]
          md:py-20

          lg:w-[92%]
          lg:grid-cols-[1.05fr_1fr_0.8fr]
          lg:gap-12
          lg:py-24

          xl:gap-16
        "
      >
        <div
          className="
            order-1
            flex
            flex-col
            items-start
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              font-medium
              tracking-[0.38em]
              text-[#a76532]

              md:text-[12px]

              lg:mb-6
              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRA ESENCIA
          </p>

          <h2
            className="
              m-0
              [font-family:Georgia,Times_New_Roman,serif]
              text-[44px]
              font-normal
              leading-[0.94]
              tracking-[-0.02em]
              text-[#3b2d24]

              sm:text-[52px]

              md:text-[60px]

              lg:text-[clamp(56px,4.2vw,78px)]
            "
          >
            RAÍCES QUE
            <br />
            INSPIRAN
          </h2>

          <div
            className="
              my-7
              h-[3px]
              w-[64px]
              bg-[var(--color-oro-maguey)]

              lg:my-8
              lg:w-[76px]
            "
          />

          <div className="max-w-[600px] space-y-5">
            <p
              className="
                m-0
                text-[15px]
                leading-[1.7]
                text-[#55463c]

                md:text-[16px]

                lg:text-[17px]
                lg:leading-[1.75]
              "
            >
              Campo Negro 1430 nace del respeto por nuestra tierra,
              por el trabajo de nuestras manos y por la riqueza cultural
              de Oaxaca. Elaborado de manera artesanal, cada botella
              encierra la historia de generaciones que han honrado
              el agave y sus tradiciones.
            </p>

            <p
              className="
                m-0
                text-[15px]
                leading-[1.7]
                text-[#55463c]

                md:text-[16px]

                lg:text-[17px]
                lg:leading-[1.75]
              "
            >
              Creemos en los momentos auténticos, en las buenas
              conversaciones y en todo lo que vale la pena ser recordado.
            </p>
          </div>

          <p
            className="
              mt-7
              mb-0
              [font-family:var(--fuente-manuscrita)]
              text-[38px]
              leading-none
              text-[#a76532]

              sm:text-[44px]

              lg:mt-9
              lg:text-[52px]
            "
          >
            Oaxaca vive en cada sorbo.
          </p>
        </div>

        <div
          className="
            order-2
            flex
            items-center
            justify-center
          "
        >
          <Image
            src="/imagenes/esencia/esencia.png"
            alt="Ilustración de agave de Campo Negro"
            width={600}
            height={700}
            className="
              h-auto
              w-full
              max-w-[350px]
              object-contain

              sm:max-w-[430px]

              md:max-w-[500px]

              lg:max-w-[540px]

              xl:max-w-[600px]
            "
          />
        </div>

        <div
          className="
            order-3
            grid
            grid-cols-3
            items-start
            gap-3

            sm:gap-5

            lg:flex
            lg:flex-col
            lg:items-center
            lg:justify-center
            lg:gap-9
          "
        >
          {valoresEsencia.map((valor) => (
            <div
              key={valor.titulo}
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
                  h-[82px]
                  w-full
                  max-w-[95px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#938a7f]/50

                  transition
                  duration-300

                  group-hover:border-[var(--color-oro-maguey)]

                  sm:h-[100px]
                  sm:max-w-[115px]

                  lg:h-[128px]
                  lg:w-[160px]
                  lg:max-w-none
                  lg:rounded-[24px]
                  lg:border-2
                "
              >
                <Image
                  src={valor.icono}
                  alt={valor.alt}
                  width={90}
                  height={90}
                  className="
                    h-[58px]
                    w-[58px]
                    object-contain
                    opacity-80

                    transition
                    duration-300

                    group-hover:scale-110
                    group-hover:opacity-100

                    sm:h-[72px]
                    sm:w-[72px]

                    lg:h-[105px]
                    lg:w-[105px]
                    lg:scale-[1.08]

                    lg:group-hover:scale-[1.15]
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  mb-0
                  max-w-[110px]
                  text-[10px]
                  font-medium
                  uppercase
                  leading-[1.3]
                  tracking-[0.1em]
                  text-[#55463c]

                  sm:text-[11px]

                  lg:mt-4
                  lg:max-w-[170px]
                  lg:text-[12px]
                  lg:tracking-[0.14em]
                "
              >
                {valor.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}