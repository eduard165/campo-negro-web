
import Image from "next/image";

export function Proceso() {
  return (
    <section
      id="proceso"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f1e8]

        md:min-h-[650px]
        lg:min-h-[710px]
      "
    >
      {/* =========================
          VERSIÓN MÓVIL
          IMAGEN ORIGINAL DEL EDITOR
      ========================= */}
      <div
        className="
          relative
          w-full
          md:hidden
        "
      >
        <Image
          src="/imagenes/proceso/Proceso_movil.png"
          alt="El proceso artesanal de Campo Negro: cocimiento, molienda y destilación."
          width={1080}
          height={1920}
          sizes="100vw"
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />
      </div>

      {/* =========================
          VERSIÓN DE ESCRITORIO
          CONSERVAMOS DISEÑO ORIGINAL
      ========================= */}
      <div
        className="
          hidden
          w-full
          items-center
          justify-center

          md:flex
        "
      >
        <div
          className="
            mx-auto
            w-[96%]
            max-w-[1550px]
            px-0
            py-16
          "
        >
          <Image
            src="/imagenes/proceso/Proceso.png"
            alt="El proceso. Tradición en cada etapa: cocimiento, molienda y destilación."
            width={2048}
            height={782}
            sizes="96vw"
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
