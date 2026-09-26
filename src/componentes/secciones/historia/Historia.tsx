import Image from "next/image";

export function Historia() {
  return (
    <section
      id="historia"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        text-white

        lg:min-h-[620px]
      "
    >
      <div
        className="
          relative
          h-[340px]
          w-full

          sm:h-[420px]

          md:h-[480px]

          lg:absolute
          lg:inset-0
          lg:h-full
        "
      >
        <Image
          src="/imagenes/historia/historia4.png"
          alt="Fachada de Campo Negro en Ejutla de Crespo"
          fill
          sizes="100vw"
          className="
            object-cover
            object-center

            lg:object-[left_center]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(
              180deg,
              rgba(20,12,8,0.05)_0%,
              rgba(20,12,8,0.18)_55%,
              rgba(20,12,8,0.72)_100%
            )]

            lg:bg-[linear-gradient(
              90deg,
              rgba(20,12,8,0.00)_0%,
              rgba(20,12,8,0.08)_34%,
              rgba(20,12,8,0.28)_48%,
              rgba(20,12,8,0.58)_62%,
              rgba(20,12,8,0.78)_74%,
              rgba(20,12,8,0.88)_100%
            )]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-[90%]
          max-w-[1600px]
          justify-center

          pt-10
          pb-12

          sm:pt-12

          md:w-[92%]
          md:pt-14
          md:pb-14

          lg:min-h-[620px]
          lg:justify-end
          lg:py-16
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[620px]
            flex-col
            items-start

            lg:w-[46%]
            lg:max-w-[650px]
            lg:justify-center
          "
        >
          <p
            className="
              mb-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-[var(--color-oro-maguey)]

              md:text-[12px]

              lg:text-[13px]
              lg:tracking-[0.45em]
            "
          >
            NUESTRA HISTORIA
          </p>

          <h2
            className="
              m-0
              [font-family:var(--fuente-condensada)]
              text-[46px]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.01em]
              text-white

              sm:text-[54px]

              md:text-[62px]

              lg:text-[68px]

              xl:text-[74px]
            "
          >
            ENTRE MUROS,
            <br />
            NACE LA
            <br />
            TRADICIÓN
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

          <p
            className="
              m-0
              w-full
              max-w-[610px]
              text-justify
              text-[15px]
              leading-[1.75]
              text-white/85

              md:text-[16px]

              lg:text-[17px]
              lg:leading-[1.8]
            "
          >
            El mezcal nace con la premisa de acompañar a cada familia
            en sus hogares, así como ser parte de una interesante
            conversación o simplemente estar presente en aquellos
            momentos que merecen ser recordados.
          </p>
        </div>
      </div>
    </section>
  );
}