"use client";

import Image from "next/image";
import { useState } from "react";

const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Legado", href: "#legado" },
  { texto: "Identidad", href: "#identidad" },
  { texto: "Origen", href: "#origen" },
  { texto: "Ritual", href: "#ritual" },
  { texto: "Proceso", href: "#proceso" },
  { texto: "Autor", href: "#autor" },
  { texto: "Contacto", href: "#contacto" },
];

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="encabezado">
      <a className="marca-header" href="#inicio" aria-label="Campo Negro, ir al inicio">
        <Image src="/imagenes/nuevo/logo-vertical.png" alt="Campo Negro 1430" width={110} height={130} priority />
      </a>
      <nav className={abierto ? "nav-principal abierto" : "nav-principal"} aria-label="Navegación principal">
        {enlaces.map(({ texto, href }) => (
          <a key={href} href={href} onClick={() => setAbierto(false)}>{texto}</a>
        ))}
      </nav>
      <button className="boton-menu" type="button" aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>
        <span /> <span /> <span />
      </button>
    </header>
  );
}
