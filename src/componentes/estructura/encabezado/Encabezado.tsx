
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Encabezado.module.css";

const enlaces = [
  ["INICIO", "inicio"],
  ["HISTORIA", "legado"],
  ["ORIGEN", "tierras"],
  ["RITUAL", "ritual"],
  ["PROCESO", "proceso"],
  ["CONTACTO", "contacto"],
] as const;

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [visible, setVisible] = useState(true);

  const ultimaPosicion = useRef(0);
  const acumulado = useRef(0);

  useEffect(() => {
    ultimaPosicion.current = window.scrollY;

    const manejarScroll = () => {
      const posicionActual = window.scrollY;
      const diferencia = posicionActual - ultimaPosicion.current;

      ultimaPosicion.current = posicionActual;

      // Siempre mostrar el encabezado cerca del inicio.
      if (posicionActual <= 80) {
        acumulado.current = 0;
        setVisible(true);
        return;
      }

      // No ocultar el encabezado si el menú está abierto.
      if (abierto) {
        acumulado.current = 0;
        setVisible(true);
        return;
      }

      // Ignorar movimientos demasiado pequeños.
      if (Math.abs(diferencia) < 1) return;

      // Reiniciar el acumulador al cambiar de dirección.
      if (
        Math.sign(diferencia) !==
        Math.sign(acumulado.current)
      ) {
        acumulado.current = 0;
      }

      acumulado.current += diferencia;

      // Ocultar al bajar.
      if (acumulado.current > 12) {
        setVisible(false);
        acumulado.current = 0;
      }

      // Mostrar al subir.
      else if (acumulado.current < -12) {
        setVisible(true);
        acumulado.current = 0;
      }
    };

    window.addEventListener("scroll", manejarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, [abierto]);

  const cerrarMenu = () => {
    setAbierto(false);
    setVisible(true);
  };

  return (
    <header
      className={`${styles.encabezado} ${
        visible || abierto
          ? styles.visible
          : styles.oculto
      }`}
    >
      {/* LOGO */}
      <a
        href="#inicio"
        className={styles.enlaceLogo}
        aria-label="Campo Negro, inicio"
        onClick={cerrarMenu}
      >
        <Image
          className={styles.logo}
          src="/imagenes/Encabezado/logo-vertical-blanco.png"
          alt="Campo Negro"
          width={180}
          height={180}
          priority
        />
      </a>

      {/* MENÚ HAMBURGUESA */}
      <button
        className={styles.menu}
        type="button"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        aria-controls="navegacion-principal"
        onClick={() => {
          setAbierto((anterior) => !anterior);
          setVisible(true);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      {/* NAVEGACIÓN */}
      <nav
        id="navegacion-principal"
        className={`${styles.navegacion} ${
          abierto ? styles.abierta : ""
        }`}
        aria-label="Navegación principal"
      >
        {enlaces.map(([texto, destino]) => (
          <a
            key={destino}
            href={`#${destino}`}
            onClick={cerrarMenu}
          >
            {texto}
          </a>
        ))}
      </nav>
    </header>
  );
}
