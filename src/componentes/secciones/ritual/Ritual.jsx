
import Image from "next/image";

export function Ritual() {
  return (
    <section
      id="ritual"
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
          IMAGEN COMPLETA DEL EDITOR
          (YA INCLUYE LOS TEXTOS)
      ========================= */}
      <div
        className="
          relative
          w-full
          md:hidden
        "
      >
        <Image
          src="/imagenes/ritual/fondo-ritual-movil.png"
          alt="El ritual de Campo Negro. También sucede alrededor de la mesa. Más que una bebida."
          width={900}
          height={1600}
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
          CONSERVAMOS EL DISEÑO ORIGINAL
      ========================= */}
      <div
        className="
          relative
          hidden
          md:block
        "
      >
        {/* FOTOGRAFÍA DE ESCRITORIO */}
        <div
          className="
            absolute
            inset-0
          "
        >
          <Image
            src="/imagenes/ritual/fondo-ritual3.png"
            alt="Momentos compartidos alrededor del mezcal Campo Negro"
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            min-h-[710px]
            flex-row
            items-start
            justify-end
          "
        >
          {/* COLUMNA DERECHA */}
          <div
            className="
              relative
              flex
              min-h-[710px]
              w-[40%]
              flex-col
              items-start
              bg-transparent
              pl-6
              pr-[5%]
              pt-[105px]

              lg:pl-8
              lg:pr-[7%]
            "
          >
            {/* IMAGEN DE TEXTO */}
            <div
              className="
                relative
                aspect-[9/11]
                w-full
                max-w-[440px]
              "
            >
              <Image
                src="/imagenes/ritual/Texto_ritual.png"
                alt="El ritual. También sucede alrededor de la mesa. Más que una bebida."
                fill
                sizes="35vw"
                className="
                  object-contain
                  object-top
                "
              />
            </div>

            {/* ILUSTRACIÓN DE LIMONES */}
            <div
              className="
                absolute
                bottom-[55px]
                right-[12%]
                h-[105px]
                w-[180px]
              "
            >
              <Image
                src="/imagenes/ritual/limones-ritual.png"
                alt="Ilustración de limones"
                fill
                sizes="200px"
                className="
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
