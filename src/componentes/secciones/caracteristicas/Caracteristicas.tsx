
import Image from "next/image";

export function Caracteristicas() {
  return (
    <section
      id="caracteristicas"
      aria-label="Características del mezcal Campo Negro"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#c8c0b6]
      "
    >
      {/* =========================
          VERSIÓN MÓVIL
      ========================= */}
      <div
        className="
          relative
          block
          w-full

          md:hidden
        "
      >
        <Image
          src="/imagenes/caracteristicas/caracteristicas-movil.png"
          alt="Características de Campo Negro: mezcal artesanal, 100% agave, contenido neto de 750 ml, 37% de alcohol, denominación de origen y producto mexicano."
          width={1024}
          height={2048}
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
      ========================= */}
      <div
        className="
          relative
          hidden
          w-full

          md:block
        "
      >
        <Image
          src="/imagenes/caracteristicas/caracteristicas-escritorio.png"
          alt="Botella de Campo Negro acompañada de sus características: totalmente artesanal, 100% agave, 750 ml, 37% de alcohol, denominación de origen y producto mexicano."
          width={2048}
          height={1024}
          sizes="100vw"
          className="
            block
            h-auto
            w-full
          "
        />
      </div>
    </section>
  );
}
