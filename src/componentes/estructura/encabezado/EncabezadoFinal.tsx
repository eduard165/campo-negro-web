"use client";
import Image from "next/image";
import { useState } from "react";

const enlaces = [
  ["INICIO", "inicio"], ["HISTORIA", "legado"], ["ORIGEN", "tierras"],
  ["RITUAL", "ritual"], ["PROCESO", "proceso"], ["CONTACTO", "contacto"],
] as const;

export function EncabezadoFinal() {
  const [abierto, setAbierto] = useState(false);
  return <header className="encabezado-final">
    <a href="#inicio" aria-label="Campo Negro, inicio" onClick={() => setAbierto(false)}>
      <Image className="logo-final" src="/imagenes/marca/logo-vertical-blanco.png" alt="Campo Negro" width={180} height={180} priority />
    </a>
    <button className="menu-final" type="button" aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={abierto} aria-controls="navegacion-final" onClick={() => setAbierto(!abierto)}>
      <span /><span /><span />
    </button>
    <nav id="navegacion-final" className={`navegacion-final ${abierto ? "abierta" : ""}`} aria-label="Navegación principal">
      {enlaces.map(([texto, destino]) => <a key={destino} href={`#${destino}`} onClick={() => setAbierto(false)}>{texto}</a>)}
    </nav>
  </header>;
}
