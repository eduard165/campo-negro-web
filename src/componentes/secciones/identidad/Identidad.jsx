
import Image from "next/image";

export function Identidad() {
  return (
    <section
      id="identidad"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#f4f1e8]
      "
    >
      {/* =========================
          VERSIÓN MÓVIL
          IMAGEN COMPLETA CON TEXTO
      ========================= */}
      <div
        className="
          relative
          w-full
          md:hidden
        "
      >
        <Image
          src="/imagenes/identidad/fondo-identidad-movil.png"
          alt="Dos tierras, una historia. Oaxaca es el origen de nuestro mezcal y Veracruz forma parte de nuestra identidad."
          width={4500}
          height={9000}
          sizes="100vw"
          className="
            block
            h-auto
            w-full
          "
        />
      </div>

      {/* =========================
          VERSIÓN ESCRITORIO
          FOTOGRAFÍA DE FONDO
      ========================= */}
      <div
        className="
          absolute
          inset-0
          hidden
          md:block
        "
      >
        <Image
          src="/imagenes/identidad/fondo-identidad.png"
          alt="Paisaje de montañas y campos de agave"
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* =========================
          DIFUMINADO BEIGE
          SOLO ESCRITORIO
      ========================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden

          md:block
          md:bg-gradient-to-r
          md:from-[#f4f1e8]
          md:via-[#f4f1e8]/85
          md:to-transparent
        "
      />

      {/* =========================
          CONTENIDO DE ESCRITORIO
      ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          w-[92%]
          max-w-[1500px]

          md:flex
          md:min-h-[700px]
          md:flex-col
          md:items-start
          md:justify-center
          md:py-20

          lg:min-h-[760px]
        "
      >
        <div
          className="
            md:w-[43%]
            md:max-w-[480px]

            lg:w-[40%]
            lg:max-w-[520px]
          "
        >
          <Image
            src="/imagenes/identidad/Texto-identidad.png"
            alt="Dos tierras, una historia. Oaxaca es el origen de nuestro mezcal. Veracruz es parte de nuestra identidad."
            width={900}
            height={1200}
            sizes="(max-width: 1023px) 43vw, 520px"
            className="
              block
              h-auto
              w-full
              object-contain
              object-left
            "
          />
        </div>
      </div>
    </section>
  );
}
