
import Image from "next/image";

export function Legado() {
  return (
    <section
      id="legado"
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
          grid
          w-[88%]
          max-w-[1100px]
          grid-cols-1
          items-center

          gap-12
          py-16

          sm:w-[85%]
          sm:gap-14
          sm:py-20

          md:w-[88%]
          md:grid-cols-2
          md:gap-14
          md:py-24

          lg:min-h-[710px]
          lg:gap-28
          lg:py-20

          xl:gap-36
        "
      >
        {/* =========================
            TEXTO ORIGINAL
        ========================= */}
        <div
          className="
            flex
            w-full
            items-center
            justify-center

            md:justify-start
          "
        >
          <Image
            src="/imagenes/legado/Texto-legado.png"
            alt="De una memoria, nace un legado. La historia de Campo Negro y el homenaje a Eloy Ponce."
            width={700}
            height={900}
            className="
              block
              h-auto
              w-full
              max-w-[420px]
              object-contain
            "
          />
        </div>

        {/* =========================
            ILUSTRACIÓN ORIGINAL
        ========================= */}
        <div
          className="
            flex
            w-full
            items-center
            justify-center

            md:justify-end
          "
        >
          <Image
            src="/imagenes/legado/ilustración-legado.png"
            alt="Ilustración de la identidad y el legado de Campo Negro"
            width={1000}
            height={1000}
            className="
              block
              h-auto
              w-full
              max-w-[440px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
