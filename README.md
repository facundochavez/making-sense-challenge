## Aplicación desplegada en Vercel

[Ver sitio en vivo](https://www.making-sense-challenge.vercel.app)

## Decisión de Tecnologías

- Aunque este proyecto es pequeño, elegí trabajar con **Next.js** y **TypeScript** para simular un proyecto a mayor escala. Para proyectos más simples, se podrían usar tecnologías como **Astro** sin TypeScript.

- **Librerías Utilizadas:**
  - **Ant Design**: Para el Switch y el Modal, aprovechando sus animaciones.
  - **Recharts**: Para la creación de gráficos.
  - **Date-fns**: Para el formato de fechas.
  - **Next-themes**: Para la gestión de temas.

- Por practicidad y familiaridad (y para evitar Tailwind), utilicé **SCSS modular** para el estilado.

## Lectura del Prototipo y Estructura del Repositorio

- Importé las imágenes del prototipo en Illustrator y ajusté el ancho del layout principal a 1440px según la guía de estilos. Esto me permitió deducir con precisión el tamaño de los componentes, paddings, márgenes, etc.

- Organicé los componentes en carpetas:
  - **Componentes Grandes** (e.g., Header, secciones completas) en `src/layouts`.
  - **Componentes Pequeños Reutilizables** (e.g., Cards) en `src/components`.
  - Nota: "layouts" se refiere a componentes contenedores internos, no a contenedores globales de páginas.

- Copié los assets (favicon e íconos) a la carpeta `public`, creando una subcarpeta `icons`.

- Creé archivos JSON en `src/data` basados en `content.tx` y definí los tipos en `src/types.ts`.

- Definí las variables de colores para los temas Light y Dark en `src/styles/global.css`.

## Construcción

- Hice que el componente raíz `Home` devolviera un `div` para aplicar la fuente Inter a todos los componentes internos. Aunque Next.js añade fuentes en el `<main>` por defecto, utilicé un `div` general para envolver los layouts como el Header.

- Personalicé el `<Head>` de Next.js con la información específica del proyecto para SEO.

- Estructuré el body importando los layouts en `index` y construyendo cada uno de ellos y sus componentes internos.

- Para los componentes de librerías (e.g., Modal de AntD), creé un componente envoltorio. Por ejemplo, en `src/layouts/PlatformModal`, importo el Modal de Ant Design como `AntModal` y personalizo sus propiedades.

- Creé funciones reutilizables en la carpeta `utils`:
  - `numberFormatter` para representar números grandes con "M" o "k".
  - `getChartData` para simular datos de los últimos 10 días.

- Usé principios de código atómico para evitar `classNames` anidados y escribí HTML semántico. Para proyectos más complejos, prefiero usar BEM con SCSS Modules, por ejemplo: `className={styles.wrapper__cards_container__card}`.

- Aseguré la adaptabilidad cambiando paddings, márgenes y `grid-column-template` con media queries para mantener una apariencia óptima en todos los tamaños.

- Aplicar TypeScript ayudó especialmente a definir los tipos de plataformas, asegurando coherencia con los datos.

- El diseño del proyecto es escalable. Para agregar una nueva plataforma (e.g., TikTok), solo es necesario:
  - Agregarla a los datos.
  - Cargar su ícono en `src/public/icons`.
  - Definir su color en `src/globals.css`.
  - Actualizar su tipo en `src/types.ts`.
  - Realizar ajustes mínimos en el grid del Hero.

- Utilicé **next-themes** para manejar el cambio de tema. Implementé `useEffect` y un estado `mounted` en la raíz (app) para evitar problemas de hidratación y asegurar el reconocimiento correcto del tema.

- Implementé animaciones usando propiedades nativas de CSS.

- Documenté el código en inglés para mantener consistencia y claridad.

## Instrucciones de Instalación

**1. Instalar Dependencias:**
```bash
npm i
