import Image from "next/image";

export function Mezcal() {
  return (
    <section
      id="mezcal"
      className="
        relative
        flex
        min-h-[580px]
        w-full
        items-center
        overflow-hidden
        text-white

        md:min-h-[640px]

        lg:min-h-[680px]
      "
    >
      <Image
        src="/imagenes/mezcal/mezcal.png"
        alt="Mezcal Campo Negro Espadín Joven"
        fill
        sizes="100vw"
        className="
          object-cover
          object-[66%_center]

          md:object-[62%_center]

          lg:object-center
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(10,7,5,0.82)_0%,rgba(15,10,7,0.68)_38%,rgba(15,10,7,0.28)_68%,rgba(15,10,7,0.08)_100%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[580px]
          w-[88%]
          max-w-[1700px]
          items-end
          py-12

          sm:py-14

          md:min-h-[640px]
          md:w-[90%]
          md:items-center
          md:py-16

          lg:min-h-[680px]
          lg:w-[92%]
          lg:py-20
        "
      >
        <div
          className="
            w-full
            max-w-[520px]

            md:max-w-[560px]

            lg:max-w-[620px]
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-white/80

              sm:text-[12px]

              lg:mb-6
              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRO MEZCAL
          </p>

          <h2
            className="
              m-0
              [font-family:Georgia,Times_New_Roman,serif]
              text-[48px]
              font-normal
              leading-[0.92]
              tracking-[-0.02em]

              sm:text-[56px]

              md:text-[68px]

              lg:text-[clamp(68px,5vw,92px)]
            "
          >
            ESPADÍN
            <br />
            JOVEN
          </h2>

          <div
            className="
              my-7
              h-[2px]
              w-[64px]
              bg-[var(--color-oro-maguey)]

              lg:my-8
              lg:h-[3px]
              lg:w-[78px]
            "
          />

          <p
            className="
              m-0
              max-w-[560px]
              text-[14px]
              leading-[1.6]
              text-white/85

              sm:text-[15px]

              md:text-[16px]

              lg:text-[18px]
              lg:leading-[1.7]
            "
          >
            Un mezcal artesanal que refleja la esencia de
            Ejutla de Crespo, Oaxaca. Elaborado con agave
            Espadín (A. angustifolia), nuestro mezcal es el
            resultado de un proceso cuidadoso y tradicional
            que honra la tierra y a su gente.
          </p>

          <div
            className="
              mt-7
              flex
              items-center
              gap-5

              sm:gap-6

              lg:mt-8
              lg:gap-8
            "
          >
            <div className="flex flex-col">
              <span
                className="
                  mb-1
                  text-[12px]
                  uppercase
                  tracking-[0.16em]
                  text-white/60

                  lg:text-[13px]
                "
              >
                Cont.
              </span>

              <strong
                className="
                  text-[20px]
                  font-medium
                  leading-none
                  text-white

                  sm:text-[22px]

                  lg:text-[26px]
                "
              >
                Neto 750ml
              </strong>
            </div>

            <div
              className="
                h-[48px]
                w-px
                bg-white/35

                lg:h-[56px]
              "
            />

            <div className="flex flex-col">
              <span
                className="
                  mb-1
                  text-[20px]
                  font-medium
                  leading-none
                  text-white

                  sm:text-[22px]

                  lg:text-[26px]
                "
              >
                45%
              </span>

              <strong
                className="
                  text-[12px]
                  font-normal
                  uppercase
                  tracking-[0.16em]
                  text-white/60

                  lg:text-[13px]
                "
              >
                Alc. Vol.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}