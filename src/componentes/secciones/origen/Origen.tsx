
import Image from "next/image";

export function Origen() {
  return (
    <section
      id="origen"
      className="
        grid
        w-full
        grid-cols-1
        overflow-hidden
        bg-[#f4f1e8]
        lg:grid-cols-2
      "
    >
      {/* =========================================
          COLUMNA IZQUIERDA
          FOTOGRAFÍA DEL AGAVE
      ========================================= */}
      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          lg:h-auto
        "
      >
        {/* FONDO DEL AGAVE */}
        <Image
          src="/imagenes/origen/fondo-origen.png"
          alt="Hojas de agave mezcalero"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="
            object-cover
            object-center
          "
        />

        {/* TEXTO SUPERIOR - MÁS PEQUEÑO */}
        <div
          className="
            absolute
            left-[24%]
            top-[15%]
            w-[45%]

            sm:left-[25%]
            sm:top-[14%]
            sm:w-[44%]

            lg:left-[23%]
            lg:top-[13%]
            lg:w-[43%]
          "
        >
          <Image
            src="/imagenes/origen/el-mezcal-nacido-en-una-tierra-mezcalera.png"
            alt="El mezcal. Nacido en una tierra mezcalera"
            width={1000}
            height={800}
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>

        {/* UBICACIÓN, LÍNEA Y MONTAÑAS - MÁS PEQUEÑAS */}
        <div
          className="
            absolute
            bottom-[12%]
            left-[10%]
            w-[65%]

            sm:bottom-[11%]
            sm:left-[10%]
            sm:w-[64%]

            lg:bottom-[6%]
            lg:left-[10%]
            lg:w-[62%]
          "
        >
          <Image
            src="/imagenes/origen/Ejutla de Crespo_ Montañas de Oaxaca.png"
            alt="Ejutla de Crespo, Oaxaca, México"
            width={1200}
            height={250}
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>
      </div>

      {/* =========================================
          COLUMNA DERECHA
          ESCORPIÓN Y TEXTO
      ========================================= */}
      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          bg-[#f4f1e8]

          lg:flex
          lg:items-center
          lg:justify-start
        "
      >
        {/* =========================================
            VERSIÓN MÓVIL
        ========================================= */}
        <div className="absolute inset-0 lg:hidden">
          {/* ESCORPIÓN */}
          <div
            className="
              absolute
              left-[66%]
              top-[28%]
              w-[7%]

              sm:left-[66%]
              sm:top-[29%]
            "
          >
            <Image
              src="/imagenes/origen/Escorpion.png"
              alt="Ilustración de un escorpión"
              width={400}
              height={400}
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>

          {/* TEXTO ORIGINAL MÓVIL */}
          <div
            className="
              absolute
              left-[23%]
              top-[39%]
              w-[60%]

              sm:left-[23%]
              sm:top-[39%]
              sm:w-[59%]
            "
          >
            <Image
              src="/imagenes/origen/Texto-origen.png"
              alt="Tradición que evoluciona con el tiempo. El origen del mezcal Campo Negro."
              width={1200}
              height={1500}
              sizes="(max-width: 639px) 60vw, 59vw"
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

        {/* =========================================
            VERSIÓN ESCRITORIO
        ========================================= */}
        <div
          className="
            relative
            hidden
            w-[55%]
            flex-col
            items-start

            lg:ml-[23%]
            lg:flex
            lg:translate-y-[5%]
          "
        >
          {/* ESCORPIÓN */}
          <div
            className="
              mb-[7%]
              ml-auto
              mr-[13%]
              w-[17%]
            "
          >
            <Image
              src="/imagenes/origen/Escorpion.png"
              alt="Ilustración de un escorpión"
              width={400}
              height={400}
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>

          {/* TEXTO ORIGINAL ESCRITORIO */}
          <Image
            src="/imagenes/origen/Texto-origen.png"
            alt="Tradición que evoluciona con el tiempo. El origen del mezcal Campo Negro."
            width={1200}
            height={1500}
            sizes="28vw"
            className="
              block
              h-auto
              w-[90%]
              object-contain
              object-left
            "
          />
        </div>
      </div>
    </section>
  );
}
