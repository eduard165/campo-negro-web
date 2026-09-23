import Image from "next/image";

import estilos from "./Esencia.module.css";

const valoresEsencia = [
  {
    titulo: "Tierra",
    icono: "/imagenes/iconos/agave.png",
    alt: "Agave",
  },
  {
    titulo: "Manos que inspiran",
    icono: "/imagenes/iconos/montana.png",
    alt: "Montañas de Oaxaca",
  },
  {
    titulo: "Momentos que unen",
    icono: "/imagenes/iconos/copas.png",
    alt: "Copas de mezcal",
  },
];

export function Esencia() {
  return (
    <section id="esencia" className={estilos.esencia}>
      <div className={estilos.contenedor}>
        <div className={estilos.informacion}>
          <p className={estilos.subtitulo}>
            NUESTRA ESENCIA
          </p>

          <h2 className={estilos.titulo}>
            RAÍCES QUE
            <br />
            INSPIRAN
          </h2>

          <div className={estilos.linea} />

          <p className={estilos.texto}>
            Campo Negro 1430 nace del respeto por nuestra tierra,
            por el trabajo de nuestras manos y por la riqueza cultural
            de Oaxaca. Elaborado de manera artesanal, cada botella
            encierra la historia de generaciones que han honrado
            el agave y sus tradiciones.
          </p>

          <p className={estilos.texto}>
            Creemos en los momentos auténticos, en las buenas
            conversaciones y en todo lo que vale la pena ser recordado.
          </p>

          <p className={estilos.fraseFinal}>
            Oaxaca vive en cada sorbo.
          </p>
        </div>

        <div className={estilos.ilustracion}>
          <Image
            src="/imagenes/esencia/esencia.png"
            alt="Ilustración de agave de Campo Negro"
            width={600}
            height={700}
            className={estilos.imagen}
          />
        </div>

        <div className={estilos.valores}>
          {valoresEsencia.map((valor) => (
            <div
              key={valor.titulo}
              className={estilos.valor}
            >
              <div className={estilos.marco}>
                <Image
                  src={valor.icono}
                  alt={valor.alt}
                  width={90}
                  height={90}
                  className={estilos.iconoValor}
                />
              </div>

              <p>{valor.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}