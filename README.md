## Aplicación desplegada en Vercel

[Ir al sitio](https://www.making-sense-challenge.vercel.app)

## Decisión de Tecnologías

- Aunque este proyecto es pequeño, elegí trabajar con **Next.js** y **TypeScript** para simular un proyecto a mayor escala. Para proyectos más simples, se podrían usar tecnologías como **Astro** sin tipado.

- **Librerías Utilizadas:**
  - **Ant Design**: Para el Switch y el Modal, sobre todo me gustan sus animaciones.
  - **Recharts**: Para la creación de gráficos.
  - **Date-fns**: Para el formato de fechas.
  - **Next-themes**: Para la gestión de temas.

- Por practicidad y familiaridad (y como se especificaba evitar el uso de Tailwind), utilicé **SCSS modular** para el estilado.

## Lectura del Prototipo y Estructura del Repositorio

- Importé las imágenes del prototipo en Illustrator y ajusté el ancho del layout principal a 1440px según la guía de estilos. Esto me permitió deducir el tamaño de los componentes, paddings, márgenes, etc.

- A medida que decidía cómo atomizar los componentes, fui deduciendo las carpetas necesarias para el repositorio:
  - **Componentes Grandes** (utilizados directamente en el `index.tsx`, como el Header y secciones completas) en `src/layouts`.
  - **Componentes Pequeños Reutilizables** (como los Cards) en `src/components`.
  - Nota: no estoy utilizando el App Route, por lo que "layouts" no se refiere a contenedores globales de páginas, sino a componentes contenedores utilizados dentro del `body`.

- Copié los assets (favicon e íconos) a la carpeta `public`, creando una subcarpeta `icons`.

- Creé archivos JSON en `src/data` basados en `content.tx` y definí los tipos en `src/types.ts`.

- Según el `style-guide.md`, definí las variables de colores para los temas Light y Dark en `src/styles/global.css`.

## Construcción

- Hice que el componente raíz `Home` devolviera un `div` para aplicar la fuente Inter a todos los componentes internos. Hay otras formas de instalar fuentes pero quise aprovechar la manera en que Next.JS lo hace por defecto al crear un nuevo proyecto; sin embargo Next lo hace en el tag `<main >`, por lo que tuve que aplicar el `className={${inter.className}` a un `div` padre que encerrara a los layouts -como el `Header`- que se encuentran por fuera del `main`.

- Customicé el `<Head>` de Next.js con la información específica del proyecto para SEO.

- Estructuré el `body` importando los layouts en `index.tsx` y fui construyendo cada uno de ellos y sus componentes internos. Por defecto utilizo una extensión de VSCode llamada Folder Templates que acelera bastante este proceso.

- Cuando utilizo componentes customizables de librerías como Ant Design, me gusta crear un nuevo componente como una instancia del mismo. De esta manera, si quiero tener mi propio `<Modal />`, lo creo como tal y dentro del mismo importo el Modal de Ant Design `as AntModal`, y lo retorno ya customizado. Un ejemplo de esto es el archivo `src/layouts/PlatformModal`.

- Creé varias funciones que necesitaba reutilizar en la carpeta `scrc/utils`. Por ejemplo, `numberFormatter`, para representar con una M o una K los números mayores al millón o a diez mil respectivamente (el valor 9999 es el máximo que puede representarse sin comprometer el ancho de las tarjetas). También, para simular que la data viene con un registro de fechas de los últimos 10 días, creé la función `getCharData` que deduce una nueva data con fechas a partir de la data de origen, la cual mantuve simple con un array de números que representan los followers de los últimos 10 días.

- Como el proyecto es relativamente simple, tener un código atómico me permitió no tener `classNames` anidados y escribir **HTML semántico**. Si no fuera el caso, por lo general utilizo el estilo **BEM** combinado con **SCSS Modules**, algo como esto: `className={styles.wrapper__cards_container__card}`

- Algo importante fue cuidar el aspecto general al cambiar el tamaño de la pantalla. Para ello ajusté con **media queries** los paddings, margins y grid-column-template para mantener la mejor apariencia en todos los tamaños.

- Aplicar TypeScript ayudó especialmente a definir los tipos de plataformas, asegurando coherencia con los datos.

- Para que **Next-themes** funcione correctamente, implementé un estado `mounted` en la raíz (app) y así evité problemas de hidratación. Los estilos de CSS no tienen inconvenientes, pero si se quiere utilizar `{ theme } = useTheme()` en el código JavaScript, podría no reconocerse el tema oscuro al realizarse el primer renderizado.

- Una vez aplicado el cambio de tema, me dispuse a pulir los estilos para que se vieran lo más parecido al prototipo.

- Creé animaciones usando propiedades nativas de CSS.

- Opiné el código en inglés y a discresión, tanto los componentes como las funciones en `scr/utils`. Puede resultar un poco redundante porque las funciones y variables ya se encuentran bien nombradas, pero preferí no dar nada por sentado.

- El diseño del proyecto es escalable. Para agregar una nueva plataforma (por ejemplo, TikTok), solo es necesario:
  - Sumar esta plataforma a los archivos `stats.data.json` y `overview.data.json` de la carpeta `src/data`.
  - Cargar su ícono en `src/public/icons`, nombrándolo en formato lowercase.
  - Definir su color en `src/globals.css`.
  - Incluir su tipo en `src/types.ts`.
  - Realizar ajustes mínimos en el grid del Hero y ya funcionaría sin tener que retocar cosas en el Modal ni en los Cards.

## Instrucciones de Instalación

**1. Instalar Dependencias:**
```bash
npm i
```

**2. Correr el development server:**
```bash
npm run dev
```

**3. Abrir en el navegador:**
[http://localhost:3000](http://localhost:3000)
