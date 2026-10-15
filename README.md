# Tailwind Realistic Paper

Un plugin ligero para Tailwind CSS que genera texturas, renglones y margenes de papel realista mediante CSS puro. Disenado para editores de texto WYSIWYG como TipTap, Quill o ProseMirror e interfaces de estudio y apuntes.

No utiliza imagenes externas; todo se renderiza matematicamente en el navegador, asegurando que el texto y los renglones mantengan su alineacion.

## Instalacion

Instala el paquete con tu gestor de dependencias:

```bash
pnpm add tailwind-realistic-paper
```

Tambien puedes instalarlo con npm:

```bash
npm install tailwind-realistic-paper
```

## Configuracion

Agrega el plugin dentro de tu archivo `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-realistic-paper')
  ],
}
```

## Uso Basico

Combina las clases utilitarias en el contenedor principal de la hoja y aplica la clase de sincronizacion en el contenedor del texto.

### Hoja en Blanco (Por defecto)

```html
<div class="paper-container paper-texture relative">
  <div class="paper-text-sync px-16 w-full h-full relative z-10" contenteditable="true">
    Contenido de la hoja en blanco.
  </div>
</div>
```

### Hoja Rayada con Margen

```html
<div class="paper-container paper-texture paper-lines relative">
  <div class="absolute inset-0 paper-margin-red pointer-events-none"></div>
  <div class="paper-text-sync pl-20 pr-12 w-full h-full relative z-10" contenteditable="true">
    Contenido sincronizado con los renglones.
  </div>
</div>
```

## Clases Disponibles

### Estructura y Textura
* `paper-container`: Define las dimensiones fijas de la hoja (850px de ancho maximo por 1100px de alto) y aplica la sombra de profundidad.
* `paper-texture`: Inyecta un filtro SVG de ruido para dar acabado de papel fisico.
* `paper-text-sync`: Sincroniza el `line-height` del texto con la altura de los renglones y oculta el desborde vertical para controlar la paginacion.

### Variaciones de Fondo
* `paper-lines`: Genera renglones horizontales uniformes.
* `paper-grid`: Genera una cuadricula matematica.
* `paper-dots`: Genera una guia de puntos.
* `paper-margin-red`: Dibuja la linea vertical roja en el margen izquierdo.

### Utilidades de Texto
* `marker-yellow`: Aplica un resaltado amarillo con `mix-blend-mode: multiply` para simular tinta real sobre el texto.