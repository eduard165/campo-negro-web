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
        w-full
        overflow-hidden
        bg-[#120804]
        text-white

        lg:flex
        lg:min-h-[700px]
        lg:items-center
      "
    >
      {/* =========================
          IMAGEN
          ========================= */}
      <div
        className="
          relative
          h-[460px]
          w-full
          shrink-0

          bg-[url('/imagenes/mezcal/mezcal4.png')]
          bg-cover
          bg-[position:88%_center]
          bg-no-repeat

          sm:h-[520px]
          sm:bg-[position:70%_center]

          md:h-[580px]
          md:bg-[position:72%_center]

          lg:absolute
          lg:inset-0
          lg:h-full
          lg:bg-cover
          lg:bg-center
        "
      >
        {/* Overlay móvil */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(
              180deg,
              rgba(16,8,4,0.04)_0%,
              rgba(16,8,4,0.06)_55%,
              rgba(16,8,4,0.55)_100%
            )]

            lg:hidden
          "
        />

        {/* Overlay desktop */}
        <div
          className="
            absolute
            inset-0
            hidden

            lg:block
            lg:bg-[linear-gradient(
              90deg,
              rgba(16,8,4,0.94)_0%,
              rgba(16,8,4,0.88)_18%,
              rgba(16,8,4,0.76)_30%,
              rgba(16,8,4,0.52)_42%,
              rgba(16,8,4,0.24)_52%,
              rgba(16,8,4,0.08)_62%,
              rgba(16,8,4,0)_72%
            )]
          "
        />
      </div>

      {/* =========================
          CONTENIDO
          ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[90%]
          max-w-[1700px]
          py-12

          sm:py-14

          md:py-16

          lg:flex
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
          {/* SOBRE TÍTULO */}
          <p
            className="
              mb-5
              [font-family:var(--fuente-texto)]
              text-[11px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-white

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.45em]

              lg:[text-shadow:0_2px_4px_rgba(0,0,0,1),0_6px_12px_rgba(0,0,0,0.85)]
            "
          >
            NUESTRO MEZCAL
          </p>

          {/* TÍTULO */}
          <h2
            className="
              m-0
              [font-family:var(--fuente-condensada)]
              text-[52px]
              font-semibold
              uppercase
              leading-[0.9]
              text-white

              sm:text-[60px]

              md:text-[70px]

              lg:text-[82px]

              lg:[text-shadow:0_3px_6px_rgba(0,0,0,1),0_10px_22px_rgba(0,0,0,0.78)]
            "
          >
            ESPADÍN
            <br />
            JOVEN
          </h2>

          {/* LÍNEA DORADA */}
          <div
            className="
              my-7
              h-[3px]
              w-[72px]
              bg-[var(--color-oro-maguey)]

              lg:shadow-[0_2px_8px_rgba(0,0,0,0.8)]
            "
          />

          {/* DESCRIPCIÓN */}
          <p
            className="
              m-0
              max-w-[680px]
              [font-family:var(--fuente-texto)]
              text-left
              text-[15px]
              font-normal
              leading-[1.75]
              text-white/90

              md:text-[16px]

              lg:text-justify
              lg:text-[17px]
              lg:leading-[1.8]
              lg:text-white/95

              lg:[text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_6px_12px_rgba(0,0,0,0.68)]
            "
          >
            Un mezcal artesanal que refleja la esencia de Ejutla de Crespo,
            Oaxaca. Elaborado con agave Espadín (A. angustifolia), nuestro
            mezcal es el resultado de un proceso cuidadoso y tradicional
            que honra la tierra y a su gente.
          </p>

          {/* DATOS */}
          <div
            className="
              mt-9
              grid
              max-w-[720px]
              grid-cols-2
              gap-x-5
              gap-y-5

              sm:grid-cols-3
              sm:gap-x-6

              lg:gap-x-8
              lg:gap-y-6
            "
          >
            {datosMezcal.map((dato) => (
              <div
                key={dato}
                className="
                  border-l
                  border-white/30
                  pl-4

                  lg:border-white/35
                "
              >
                <p
                  className="
                    m-0
                    [font-family:var(--fuente-texto)]
                    text-[13px]
                    font-normal
                    uppercase
                    leading-[1.3]
                    tracking-[0.04em]
                    text-white/90

                    sm:text-[14px]

                    md:text-[15px]

                    lg:text-[18px]
                    lg:text-white

                    lg:[text-shadow:0_2px_4px_rgba(0,0,0,1),0_5px_12px_rgba(0,0,0,0.82)]
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