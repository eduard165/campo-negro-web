const datosMezcal = [
  "ARTESANAL",
  "CONT. NETO. 750 ML",
  "ALC. VOL. 45%",
  "100% AGAVE",
  "DENOMINACIÓN DE ORIGEN",
  "PRODUCTO MEXICANO",
];

export function Mezcal() {
  return (
    <section
      id="mezcal"
      className="
        relative
        isolate
        flex
        min-h-[620px]
        w-full
        items-center
        overflow-hidden
        text-white

        bg-[url('/imagenes/mezcal/mezcal-movil4.png')]
        bg-cover
        bg-center

        lg:min-h-[700px]
        lg:bg-[url('/imagenes/mezcal/mezcal3.png')]
        lg:bg-center
      "
    >
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(
            180deg,
            rgba(16,8,4,0.22)_0%,
            rgba(16,8,4,0.42)_45%,
            rgba(16,8,4,0.88)_100%
          )]

          lg:bg-[linear-gradient(
            90deg,
            rgba(16,8,4,0.92)_0%,
            rgba(16,8,4,0.86)_20%,
            rgba(16,8,4,0.72)_32%,
            rgba(16,8,4,0.46)_43%,
            rgba(16,8,4,0.18)_53%,
            rgba(16,8,4,0.04)_62%,
            rgba(16,8,4,0)_72%
          )]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          w-[90%]
          max-w-[1700px]
          items-end
          pb-12
          pt-28

          md:items-center
          md:pb-14
          md:pt-20

          lg:min-h-[700px]
          lg:w-[92%]
          lg:items-center
          lg:py-20
        "
      >
        <div
          className="
            w-full
            max-w-[720px]
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-white

              [text-shadow:0_2px_4px_rgba(0,0,0,1),0_6px_12px_rgba(0,0,0,0.85)]

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRO MEZCAL
          </p>

          <h2
            className="
              m-0
              [font-family:var(--fuente-condensada)]
              text-[52px]
              font-normal
              uppercase
              leading-[0.9]
              text-white

              [text-shadow:0_3px_6px_rgba(0,0,0,1),0_10px_22px_rgba(0,0,0,0.78)]

              sm:text-[60px]

              md:text-[70px]

              lg:text-[82px]
            "
          >
            ESPADÍN
            <br />
            JOVEN
          </h2>

          <div
            className="
              my-7
              h-[3px]
              w-[72px]
              bg-[var(--color-oro-maguey)]
              shadow-[0_2px_8px_rgba(0,0,0,0.8)]
            "
          />

          <p
            className="
              m-0
              max-w-[680px]
              text-justify
              text-[15px]
              leading-[1.75]
              text-white/95

              [text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_6px_12px_rgba(0,0,0,0.68)]

              md:text-[16px]

              lg:text-[17px]
              lg:leading-[1.8]
            "
          >
            Un mezcal artesanal que refleja la esencia de Ejutla de Crespo,
            Oaxaca. Elaborado con agave Espadín (A. angustifolia), nuestro
            mezcal es el resultado de un proceso cuidadoso y tradicional
            que honra la tierra y a su gente.
          </p>

          <div
            className="
              mt-9
              grid
              max-w-[720px]
              grid-cols-2
              gap-x-6
              gap-y-6

              sm:grid-cols-3

              lg:gap-x-8
            "
          >
            {datosMezcal.map((dato) => (
              <div
                key={dato}
                className="
                  border-l
                  border-white/35
                  pl-4
                "
              >
                <p
                  className="
                    m-0
                    [font-family:var(--fuente-condensada)]
                    text-[16px]
                    font-normal
                    uppercase
                    leading-[1.25]
                    tracking-[0.04em]
                    text-white

                    [text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.82)]

                    lg:text-[18px]
                  "
                >
                  {dato}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}