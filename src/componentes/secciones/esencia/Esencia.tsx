import Image from "next/image";

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
          w-[90%]
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-10
          py-10

          md:w-[92%]
          md:py-12

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-10
          lg:py-14

          xl:gap-12
          xl:py-16
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-start

            lg:max-w-[760px]
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
            NUESTRA ESENCIA
          </p>

          <h2
            className="
              m-0
              [font-family:var(--fuente-condensada)]
              text-[46px]
              font-normal
              uppercase
              leading-[0.9]
              tracking-[-0.01em]
              text-[#3b2d24]

              sm:text-[54px]

              md:text-[60px]

              lg:text-[68px]

              xl:text-[72px]
            "
          >
            RAÍCES QUE
            <br />
            INSPIRAN
          </h2>

          <div
            className="
              my-6
              h-[3px]
              w-[64px]
              bg-[var(--color-oro-maguey)]

              lg:w-[72px]
            "
          />

          <div
            className="
              w-full
              max-w-[730px]
              space-y-5
            "
          >
            <p
              className="
                m-0
                w-full
                text-justify
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
                w-full
                text-justify
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
              text-[36px]
              leading-none
              text-[#a76532]

              sm:text-[42px]

              lg:mt-8
              lg:text-[48px]
            "
          >
            Oaxaca vive en cada sorbo.
          </p>
        </div>

        <div
          className="
            flex
            w-full
            items-center
            justify-center
            py-4

            lg:py-0
          "
        >
          <Image
            src="/imagenes/esencia/ilustracion.png"
            alt="Ilustración de la esencia de Campo Negro"
            width={900}
            height={900}
            className="
              h-auto
              w-full
              max-w-[320px]
              object-contain

              sm:max-w-[360px]

              md:max-w-[400px]

              lg:max-w-[440px]

              xl:max-w-[470px]
            "
          />
        </div>
      </div>
    </section>
  );
}