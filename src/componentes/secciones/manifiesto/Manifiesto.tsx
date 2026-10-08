
import Image from "next/image";

export function Manifiesto() {
  return (
    <section
      aria-label="Manifiesto de Campo Negro"
      className="
        relative
        isolate
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#c69c45]

        px-4
        py-14

        sm:px-6
        sm:py-20

        md:min-h-[620px]
        md:px-10
        md:py-24

        lg:min-h-[710px]
      "
    >
      {/* =========================
          FONDO DORADO
      ========================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(115deg,#c69c45_0%,#c49a46_45%,#97773a_100%)]
        "
      />

      {/* =========================
          SOMBRAS DIFUMINADAS
      ========================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[18%]
          top-[40%]
          h-[180px]
          w-[105%]
          -rotate-[34deg]
          bg-[#614b28]/35
          blur-[65px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[12%]
          h-[150px]
          w-[85%]
          -rotate-[38deg]
          bg-[#594526]/40
          blur-[60px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-25%]
          left-[20%]
          h-[160px]
          w-[80%]
          -rotate-[35deg]
          bg-[#6e552c]/35
          blur-[70px]
        "
      />

      {/* =========================
          MANIFIESTO MÓVIL
          IMAGEN CON LETRAS ORIGINALES
      ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          block
          w-full
          max-w-[520px]

          md:hidden
        "
      >
        <Image
          src="/imagenes/manifiesto/manifiesto-movil.png"
          alt="Manifiesto de Campo Negro: mezcal de origen oaxaqueño, tradiciones de Veracruz y momentos que merecen ser recordados."
          width={1024}
          height={1536}
          sizes="(max-width: 767px) 100vw, 520px"
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />
      </div>

      {/* =========================
          MANIFIESTO ESCRITORIO
          SE CONSERVA SIN CAMBIOS
      ========================= */}
      <div
        className="
          relative
          z-10
          hidden
          w-[78%]
          max-w-[1120px]

          md:block
        "
      >
        <Image
          src="/imagenes/manifiesto/manifiesto.png"
          alt="Manifiesto de Campo Negro sobre sus raíces oaxaqueñas, su identidad familiar y las tradiciones que busca compartir."
          width={2048}
          height={831}
          sizes="(max-width: 1200px) 78vw, 1120px"
          className="
            block
            h-auto
            w-full
            brightness-0
            invert
            opacity-90
          "
        />
      </div>
    </section>
  );
}
