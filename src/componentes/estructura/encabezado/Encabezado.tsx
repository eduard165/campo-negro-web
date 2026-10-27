
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

const LOGO =
  "/imagenes/Encabezado/00-encabezado-logo-blanco.png";

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

      if (posicionActual <= 80 || abierto) {
        acumulado.current = 0;
        setVisible(true);
        return;
      }

      if (Math.abs(diferencia) < 1) return;

      if (
        Math.sign(diferencia) !==
        Math.sign(acumulado.current)
      ) {
        acumulado.current = 0;
      }

      acumulado.current += diferencia;

      if (acumulado.current > 12) {
        setVisible(false);
        acumulado.current = 0;
      } else if (acumulado.current < -12) {
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


  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setAbierto(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto]);

  const cerrarMenu = () => {
    setAbierto(false);
    setVisible(true);
  };

  return (
    <header
      className={`${styles.encabezado} ${
        visible || abierto ? styles.visible : styles.oculto
      }`}
    >
      <a
        href="#inicio"
        className={`${styles.enlaceLogo} ${
          abierto ? styles.logoOculto : ""
        }`}
        aria-label="Campo Negro, inicio"
        onClick={cerrarMenu}
      >
        <Image
          className={styles.logo}
          src={LOGO}
          alt="Campo Negro"
          width={180}
          height={180}
          priority
        />
      </a>

      <button
        className={`${styles.menu} ${
          abierto ? styles.menuAbierto : ""
        }`}
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

      <nav
        id="navegacion-principal"
        className={`${styles.navegacion} ${
          abierto ? styles.abierta : ""
        }`}
        aria-label="Navegación principal"
      >
        <div className={styles.cabeceraMovil}>
          <Image
            className={styles.logoInterior}
            src={LOGO}
            alt="Campo Negro"
            width={180}
            height={180}
          />
        </div>

        <div className={styles.listaEnlaces}>
          {enlaces.map(([texto, destino]) => (
            <a
              key={destino}
              href={`#${destino}`}
              onClick={cerrarMenu}
            >
              {texto}
            </a>
          ))}
        </div>

        <div className={styles.pieMenu}>
          MEZCAL ARTESANAL · OAXACA, MÉXICO
        </div>
      </nav>
    </header>
  );
}
