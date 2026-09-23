import Image from "next/image";
import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";

import estilos from "./Portada.module.css";

export function Portada() {
  return (
    <section id="inicio" className={estilos.portada}>
      <div className={estilos.oscurecimiento} />

      <Encabezado />

      <div className={estilos.contenido}>
        <div className={estilos.informacion}>
          <div className={estilos.logoPortada}>
            <Image
              src="/imagenes/marca/logo-blanco.png"
              alt="Campo Negro"
              width={500}
              height={500}
              priority
              className={estilos.imagenLogoPortada}
            />
          </div>

          <p className={estilos.tipo}>MEZCAL ARTESANAL</p>

          <div className={estilos.separador} />

          <p className={estilos.frase}>
            MOMENTOS QUE MERECEN SER
          </p>

          <p className={estilos.destacado}>
            recordados
          </p>

          <a href="#mezcal" className={estilos.boton}>
            CONOCE NUESTRA VARIEDAD
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}