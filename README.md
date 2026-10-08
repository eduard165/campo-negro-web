# Campo Negro 1430 — rediseño web

Sitio web de una sola página para Campo Negro, realizado en **Next.js 16**, **React 19** y **TypeScript**, siguiendo la nueva propuesta visual `CN_Web.pdf` (9 láminas).

## Iniciar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Para comprobar producción:

```bash
npm run build
npm start
```

## Secciones

1. Inicio — Una historia que permanece
2. Legado — Homenaje a Eloy Ponce
3. Identidad — Oaxaca y Veracruz
4. Origen — El mezcal
5. Ritual — Compartir en la mesa
6. Manifiesto — Mensaje de marca
7. Proceso — Cocimiento, molienda y destilación
8. Producto — Ficha del mezcal
9. Autor — Iván Betancourt
10. Pie de página — Contacto (pendiente de datos oficiales)

## Archivos importantes

- `src/app/page.tsx`: orden de las secciones.
- `src/componentes/secciones/nuevo/Secciones.tsx`: contenido de cada bloque.
- `src/componentes/estructura/encabezado/Encabezado.tsx`: menú responsive.
- `src/app/globals.css`: estilos y ajustes móviles.
- `public/imagenes/nuevo/`: material visual del cliente y recortes de referencia.

## Material pendiente del cliente

**Importante:** `CN_Web.pdf` contiene las nueve láminas como imágenes aplanadas; no se entregaron los fondos fotográficos originales por separado. Para que el proyecto se pueda visualizar desde ahora, las fotografías en `hero-botella.webp`, `identidad-paisaje.webp`, `origen-agave.webp`, `ritual-mesa.webp`, `producto-botella.webp` y `autor-fotos.webp` son **recortes de las imágenes del propio PDF**, no fotografías originales independientes. Algunas pueden contener detalles gráficos integrados del mockup y su resolución es limitada. Reemplazarlas por los fondos originales en cuanto los comparta el cliente, conservando los nombres.

Los logotipos, ilustraciones, sellos e imágenes originales recibidos en el ZIP están en el mismo directorio. No se reconstruyeron ni alteraron las etiquetas del producto.

La ficha del nuevo PDF indica **37% Alc. Vol.**; el material previo del proyecto decía **45%**. Se respetó el nuevo PDF, pero se recomienda confirmar este dato con el cliente antes de publicar.

No se inventaron correos, teléfonos ni redes sociales: solicitar datos oficiales para activar el contacto. La fuente del diseño es una tipografía condensada y una manuscrita; actualmente se utilizan alternativas web (Barlow Condensed y Luxurious Script) mientras no se disponga de los archivos tipográficos licenciados del cliente.
