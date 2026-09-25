import Image from "next/image";

export function Historia() {
  return (
    <section
      id="historia"
      className="
        grid
        w-full
        grid-cols-1
        overflow-hidden
        bg-[var(--color-cal)]

        lg:grid-cols-2
      "
    >
      <div
        className="
          relative
          min-h-[340px]
          w-full
          overflow-hidden

          sm:min-h-[420px]

          md:min-h-[500px]

          lg:min-h-[720px]
        "
      >
        <Image
          src="/imagenes/historia/historia.png"
          alt="Fachada de Campo Negro en Ejutla de Crespo"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="
            object-cover
            object-[42%_center]

            transition-transform
            duration-700

            hover:scale-[1.015]

            lg:object-center
          "
        />
      </div>

      <div
        className="
          flex
          items-center
          justify-center
          border-t
          border-[#c69c45]/40
          px-[7%]
          py-12

          sm:py-14

          md:px-[8%]
          md:py-16

          lg:border-t-0
          lg:border-l
          lg:px-[8%]
          lg:py-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[620px]
            flex-col
            items-start

            lg:-translate-y-2
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              font-medium
              tracking-[0.35em]
              text-[#a76532]

              sm:text-[12px]
              sm:tracking-[0.4em]

              lg:mb-6
              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRA HISTORIA
          </p>

          <h2
            className="
              m-0
              max-w-[590px]
              [font-family:Georgia,Times_New_Roman,serif]
              text-[40px]
              font-normal
              leading-[0.96]
              tracking-[-0.02em]
              text-[#3b2d24]

              sm:text-[48px]

              md:text-[60px]

              lg:text-[clamp(54px,4.3vw,78px)]
              lg:leading-[0.94]
            "
          >
            ENTRE MUROS,
            <br />
            NACE LA TRADICIÓN
          </h2>

          <div
            className="
              my-7
              h-[2px]
              w-[62px]
              bg-[var(--color-oro-maguey)]

              lg:my-8
              lg:h-[3px]
              lg:w-[78px]
            "
          />

          <p
            className="
              m-0
              max-w-[590px]
              text-[15px]
              leading-[1.7]
              text-[#55463c]

              sm:text-[16px]

              lg:text-[18px]
              lg:leading-[1.75]
            "
          >
            Entre muros de cantera y manos que conocen el agave,
            Campo Negro conserva el carácter de Ejutla de Crespo
            y la memoria de una tradición viva.
          </p>

          <p
            className="
              mt-7
              mb-0
              [font-family:var(--fuente-manuscrita)]
              text-[36px]
              leading-none
              text-[#a76532]

              sm:text-[42px]

              md:text-[48px]

              lg:mt-9
              lg:text-[clamp(42px,3vw,58px)]
            "
          >
            Cada espacio guarda una historia.
          </p>
        </div>
      </div>
    </section>
  );
}