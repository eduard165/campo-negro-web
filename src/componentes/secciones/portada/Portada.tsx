import Image from "next/image";

export function Portada() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#f4f1e8]"
    >
      {/* FONDO MÓVIL */}
      <div className="relative w-full md:hidden">
        <Image
          src="/imagenes/portada/fondo-portada-movil3.png"
          alt="Botella de mezcal Campo Negro"
          width={1288}
          height={2576}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>

      {/* FONDO ESCRITORIO */}
      <div className="relative hidden w-full md:block">
        <Image
          src="/imagenes/portada/fondo-portada.jpg"
          alt="Botella de mezcal Campo Negro"
          width={2576}
          height={1288}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>

      {/* CONTENIDO */}
      <div
        className="
          absolute
          z-10
          whitespace-nowrap
          text-[#292827]

          left-[17.3%]
          top-[23.9vw]

          md:left-[8.66%]
          md:top-[23.9%]
        "
      >
        {/* TÍTULO - Gill Sans Condensed
            El diseño se ve más "medium" que regular: el text-stroke
            engrosa un poco el trazo sin llegar a bold. */}
        <h1
          className="
            font-gill
            font-normal
            uppercase
            leading-[1.05]
            tracking-[0.03em]
            [word-spacing:0.12em]
            [-webkit-text-stroke:0.035em_currentColor]
            text-[4.75vw]

            md:text-[2.38vw]
          "
        >
          Una historia que
          <br />
          permanece...
        </h1>

        {/* SCRIPT */}
        <p
          className="
            font-luxurious
            block
            w-max
            origin-bottom-left
            -rotate-[5deg]
            font-normal
            leading-[0.62]
            text-[5.5vw]
            ml-[14.1vw]
            mt-[2.4vw]

            md:text-[2.75vw]
            md:ml-[7.07vw]
            md:mt-[1.4vw]
          "
        >
          Descúbrela junto
          <br />
          a nosotros
        </p>

        {/* SUBTÍTULO - Myriad Pro regular */}
        <h2
          className="
            font-myriad
            font-normal
            uppercase
            leading-[1.2]
            text-[2.7vw]
            mt-[4.4vw]

            md:text-[1.33vw]
            md:mt-[1.55vw]
          "
        >
          Campo Negro
        </h2>

        {/* PÁRRAFOS */}
        <div
          className="
            font-myriad
            font-normal
            leading-[1.16]
            text-[2.75vw]
            mt-[1.1vw]

            md:text-[1.34vw]
            md:leading-[1.19]
            md:mt-[0.55vw]
          "
        >
          <p>
            Nacido en el corazón de Oaxaca y llevado por
            <br />
            una historia que cruza generaciones, esta
            <br />
            bebida ancestral no es solo un mezcal más.
          </p>

          <p className="mt-[1.16em] md:mt-[1.19em]">
            Este proyecto nace con la intención de
            <br />
            acompañarte en la mesa o simplemente estar
            <br />
            dentro de una conversación, pero sobre todo,
            <br />
            para estar presente en esos momentos que
            <br />
            merecen ser recordados.
          </p>
        </div>
      </div>
    </section>
  );
}