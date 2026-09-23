<div align="center">

<img src="public/imagenes/marca/logo-principal.png" alt="Campo Negro 1430" width="180" />

# Campo Negro 1430

### Landing page oficial · Mezcal artesanal de Oaxaca

Una experiencia web desarrollada para transmitir la identidad, historia y tradición de **Campo Negro 1430**, combinando una estética editorial con una arquitectura limpia, modular y escalable.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Estado](https://img.shields.io/badge/Estado-En_desarrollo-C69C45?style=for-the-badge)](#estado-del-proyecto)

</div>

---

## ✦ Sobre el proyecto

**Campo Negro 1430** es una landing page enfocada en presentar la esencia de una marca de mezcal artesanal originaria de Oaxaca.

El proyecto fue reconstruido desde cero tomando como referencia una propuesta visual previa, priorizando:

- una estructura clara y mantenible;
- componentes separados por responsabilidad;
- navegación interna para una experiencia tipo *one page*;
- diseño adaptable a diferentes tamaños de pantalla;
- recursos visuales organizados localmente;
- buenas prácticas con Git y control de versiones;
- una base preparada para futuras ampliaciones.

---

## ✦ Secciones

| Sección | Descripción |
|---|---|
| **Inicio** | Portada principal con identidad visual y navegación. |
| **Nuestra Esencia** | Filosofía, raíces y valores de Campo Negro. |
| **Nuestra Historia** | Historia de la marca y vínculo con Ejutla de Crespo. |
| **Nuestro Mezcal** | Presentación del Espadín Joven y sus características. |
| **Proceso** | Etapas principales del proceso artesanal. |
| **Contacto** | Redes sociales, identidad de marca y cierre del sitio. |

---

## ✦ Tecnologías

```text
Next.js
React
TypeScript
Tailwind CSS
CSS Modules
next/font
next/image
Git
GitHub
```

---

## ✦ Estructura del proyecto

```text
campo-negro-web/
│
├── public/
│   └── imagenes/
│       ├── esencia/
│       ├── historia/
│       ├── iconos/
│       ├── marca/
│       ├── mezcal/
│       ├── pie-pagina/
│       ├── portada/
│       └── proceso/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── componentes/
│   │   ├── estructura/
│   │   │   ├── encabezado/
│   │   │   └── pie-pagina/
│   │   ├── secciones/
│   │   │   ├── esencia/
│   │   │   ├── historia/
│   │   │   ├── mezcal/
│   │   │   ├── portada/
│   │   │   └── proceso/
│   │   └── interfaz/
│   │
│   ├── configuracion/
│   ├── datos/
│   ├── tipos/
│   └── utilidades/
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✦ Instalación

```bash
git clone https://github.com/eduard165/campo-negro-web.git
cd campo-negro-web
npm install
npm run dev
```

Después abre:

```text
http://localhost:3000
```

---

## ✦ Scripts disponibles

| Comando | Función |
|---|---|
| `npm run dev` | Inicia el entorno de desarrollo. |
| `npm run build` | Genera la versión de producción. |
| `npm run start` | Ejecuta la aplicación compilada. |
| `npm run lint` | Analiza el código con ESLint. |

---

## ✦ Navegación

El sitio funciona como una **landing page de una sola página**.

```text
#inicio
#historia
#mezcal
#proceso
#contacto
```

La configuración del menú se encuentra en:

```text
src/datos/navegacion.ts
```

---

## ✦ Sistema visual

La interfaz utiliza una paleta inspirada en tierra, maguey y mezcal.

```css
--color-oro-maguey: #c69c45;
```

El diseño combina tonos crema, marrones profundos, blanco, negro y acentos dorados.

---

## ✦ Flujo de trabajo con Git

```text
main
│
├── feature/nuestra-historia
├── feature/nuestro-mezcal
├── feature/proceso
└── feature/contacto
```

Ejemplo:

```bash
git switch -c feature/nombre-seccion
git add .
git commit -m "feat: agregar nueva seccion"
git push -u origin feature/nombre-seccion
```

Después:

```bash
git switch main
git merge feature/nombre-seccion
git push
```

---

## ✦ Estado del proyecto

### Implementado

- [x] Estructura base con Next.js
- [x] Arquitectura modular
- [x] Portada principal
- [x] Encabezado y navegación interna
- [x] Nuestra Esencia
- [x] Nuestra Historia
- [x] Nuestro Mezcal
- [x] Proceso
- [x] Contacto y pie de página
- [x] Recursos visuales locales
- [x] Microinteracciones

### Siguiente etapa

- [ ] Revisión responsive completa
- [ ] Ajustes finales de accesibilidad
- [ ] Enlaces reales de redes sociales
- [ ] WhatsApp de contacto
- [ ] Optimización final de imágenes
- [ ] Revisión SEO
- [ ] Auditoría Lighthouse
- [ ] Despliegue de producción

---

## ✦ Repositorio

<div align="center">

### [github.com/eduard165/campo-negro-web](https://github.com/eduard165/campo-negro-web)

</div>

---

## ✦ Créditos

**Desarrollo web**  
Eduardo Rodríguez

**Identidad visual y material gráfico**  
Campo Negro 1430

**Diseño / colaboración visual**  
Iván Betancourt

---

<div align="center">

### Campo Negro 1430

**Tradición · Tierra · Mezcal · Oaxaca**

<sub>Hecho con atención al detalle y respeto por la identidad de la marca.</sub>

</div>
