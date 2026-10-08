
import Image from "next/image";

export function Autor() {
  return (
    <section
      id="autor"
      aria-label="Maestro mezcalero Iván Betancourt"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f1e8]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1160px]
          flex-col
          items-center
          px-5
          pb-12
          pt-14

          sm:px-8
          sm:pt-20

          lg:min-h-[710px]
          lg:flex-row
          lg:justify-between
          lg:gap-16
          lg:px-8
          lg:py-12
        "
      >
        {/* =========================
            TEXTO DEL MAESTRO
        ========================= */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[390px]
            shrink-0

            lg:w-[340px]
            lg:max-w-none
          "
        >
          <Image
            src="/imagenes/autor/texto-maestro.png"
            alt="Maestro mezcalero Iván Betancourt. Siete años de experiencia lo llevaron del cultivo del agave al corazón del mezcal. Su aprendizaje con maestros mezcaleros de Oaxaca le permitió desarrollar una manera propia de entender y preservar la tradición."
            width={1217}
            height={2048}
            sizes="(max-width: 1023px) 90vw, 340px"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>

        {/* =========================
            COLLAGE DE FOTOGRAFÍAS
        ========================= */}
        <div
          className="
            relative
            mt-10
            w-full
            max-w-[620px]
            shrink-0

            sm:mt-14

            lg:mt-0
            lg:w-[56%]
            lg:max-w-[620px]
          "
        >
          <Image
            src="/imagenes/autor/collage-maestro.png"
            alt="Collage fotográfico del maestro mezcalero Iván Betancourt trabajando con agave en Oaxaca."
            width={2048}
            height={2048}
            sizes="(max-width: 1023px) 100vw, 620px"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
