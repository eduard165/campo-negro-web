
import Image from "next/image";
import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";

export function Portada() {
  return (
    <section
      id="inicio"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f1e8]
      "
    >
      {/* =========================
          ENCABEZADO
      ========================= */}
      <Encabezado />

      {/* =========================
          PORTADA MÓVIL
      ========================= */}
      <div
        className="
          relative
          w-full
          md:hidden
        "
      >
        {/* IMAGEN ORIGINAL MÓVIL */}
        <Image
          src="/imagenes/portada/fondo-portada-movil.png"
          alt="Campo Negro: una historia que permanece"
          width={4500}
          height={8190}
          priority
          sizes="100vw"
          className="
            block
            h-auto
            w-full
          "
        />

        {/* BOTÓN DORADO MÓVIL */}
        <a
          href="#legado"
          className="
            absolute
            left-[18%]
            top-[38%]
            z-10

            inline-flex
            min-h-[44px]
            items-center
            justify-between
            gap-5

            bg-[#c69c45]
            px-3
            py-2
            text-white

            transition-colors
            duration-300

            hover:bg-[#ae8737]

            sm:min-h-[52px]
            sm:gap-7
            sm:px-4
          "
        >
          <span
            className="
              text-left
              text-[11px]
              font-medium
              uppercase
              leading-[1.15]

              sm:text-[13px]
            "
          >
            DESCUBRE LA
            <br />
            HISTORIA...
          </span>

          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v17" />
            <path d="m5 13 7 7 7-7" />
          </svg>
        </a>
      </div>

      {/* =========================
          PORTADA ESCRITORIO
      ========================= */}
      <div
        className="
          relative
          hidden
          min-h-[100svh]
          w-full

          md:block
        "
      >
        {/* FONDO ESCRITORIO */}
        <div
          className="
            absolute
            inset-0
          "
        >
          <Image
            src="/imagenes/portada/fondo-portada.jpg"
            alt="Botella de mezcal Campo Negro"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* =========================
            CONTENIDO ESCRITORIO
        ========================= */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[100svh]
            w-[92%]
            max-w-[1500px]
            items-center

            pb-12
            pt-[110px]

            lg:pt-[120px]
          "
        >
          {/* COLUMNA DE TEXTO */}
          <div
            className="
              flex
              w-[43%]
              max-w-[430px]
              flex-col
              items-start

              lg:w-[40%]
              lg:max-w-[460px]

              xl:w-[42%]
              xl:max-w-[500px]
            "
          >
            {/* =========================
                IMAGEN ORIGINAL DE TEXTO
                SIN RECORTES
            ========================= */}
            <Image
              src="/imagenes/portada/Texto-portada.png"
              alt="Una historia que permanece. Descúbrela junto a nosotros. Campo Negro."
              width={900}
              height={1100}
              priority
              sizes="(max-width: 1023px) 43vw,(max-width: 1279px) 40vw,500px"
              className="
                block
                h-auto
                w-full
                object-contain
                object-left
              "
            />

            {/* =========================
                BOTÓN DORADO ESCRITORIO
            ========================= */}
            <a
              href="#legado"
              className="
                relative
                z-20
                mt-6
                inline-flex
                min-h-[52px]
                shrink-0
                items-center
                justify-between
                gap-7

                bg-[#c69c45]
                px-4
                py-2
                text-white

                transition-colors
                duration-300

                hover:bg-[#ae8737]
              "
            >
              <span
                className="
                  text-left
                  text-[13px]
                  font-medium
                  uppercase
                  leading-[1.15]
                "
              >
                DESCUBRE LA
                <br />
                HISTORIA...
              </span>

              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v17" />
                <path d="m5 13 7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
