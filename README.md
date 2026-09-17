# Liga de Fútbol Cristiana — App React

Conversión fiel a React de tu app hecha en Stitch (Inicio, Calendario,
Equipos, Estadísticas y Reglas), manteniendo exactamente los mismos
estilos (glassmorphism verde, tipografías Plus Jakarta Sans / Cormorant
Garamond, tarjetas de cristal, balón animado, etc.) y navegable con
react-router-dom.

## Cómo correr la app

1. Instala las dependencias (solo la primera vez):

   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abre la URL que te muestre la terminal (normalmente
   http://localhost:5173).

3. Para generar la versión de producción (archivos listos para subir a
   un hosting):

   ```bash
   npm run build
   ```

   Los archivos quedan en la carpeta `dist/`.

## Cómo poner tus imágenes (escudos y balón)

Todas las imágenes se cargan desde la carpeta `public/images/`. Ahora
mismo esa carpeta tiene placeholders (círculos de color con siglas)
para que la app se vea completa desde ya.

Para poner tus imágenes reales, solo reemplaza cada archivo dentro de
`public/images/` **manteniendo el mismo nombre**:

| Archivo                       | Qué escudo/imagen va ahí     |
|--------------------------------|-------------------------------|
| `escudo_sinai.png`             | Escudo de Sinaí               |
| `3ra_bautista.png`             | Escudo de 3ra Bautista        |
| `el_cordero.png`               | Escudo de El Corderito        |
| `pedro.png`                    | Escudo de Pedro               |
| `liga_evangelica.png`          | Escudo de Liga Evangélica     |
| `roca_fuerte.png`              | Escudo de Roca Fuerte         |
| `trionda_5_photoroom.png`      | Balón Trionda (se anima en Inicio) |

No hay que tocar nada de código: en cuanto reemplaces los archivos con
esos mismos nombres, la app los mostrará automáticamente en todas las
pantallas (Inicio, Calendario, Equipos y Estadísticas usan las mismas
imágenes).

Si prefieres usar otros nombres de archivo, solo tendrías que editar
la propiedad `logo` de cada equipo en `src/data/teams.js` y la línea
`src="/images/..."` del balón en `src/pages/Inicio.jsx`.

## Estructura del proyecto

```
src/
  components/       -> TopBar, BottomNav, AmbientGlows, MobileShell (layout)
  data/             -> teams.js, schedule.js, standings.js, rules.js
  pages/            -> Inicio.jsx, Calendario.jsx, Equipos.jsx,
                        Estadisticas.jsx, Reglas.jsx
  index.css         -> estilos globales (glass-card, ambient-glow, etc.)
  App.jsx           -> rutas (react-router-dom)
public/
  images/           -> escudos y balón
```

## Navegación

La barra inferior (Inicio / Calendario / Equipos / Estadísticas /
Reglas) usa rutas reales de React Router (`/`, `/calendario`,
`/equipos`, `/estadisticas`, `/reglas`), así que la app es completamente
navegable, con el ítem activo resaltado igual que en el diseño
original.
# liga-cristiana
