# 🎮 Proyecto Final: Gamespace

**Gamespace** es una plataforma de e-commerce diseñada especialmente para la comunidad gamer, donde los usuarios pueden explorar y encontrar sus productos favoritos del mundo de los videojuegos.

Toda la página web cuenta con un **diseño responsivo (Mobile-First)** enfocado prioritariamente en dispositivos móviles, asegurando una experiencia fluida y atractiva desde cualquier pantalla.

---

## 📄 Estructura del Sitio

El proyecto está compuesto por **4 páginas principales**, cada una con tecnologías adaptadas a sus necesidades:

| # | Página | Tecnología Principal | Descripción |
|---|---|---|---|
| 1 | **Inicio (Home)** | HTML + CSS + JavaScript | Portada del sitio con productos nuevos y promociones dinámicas. |
| 2 | **Conócenos** | HTML + CSS Puro | Sección informativa sobre el equipo y la visión del proyecto. |
| 3 | **Market** | HTML + CSS + JavaScript | Catálogo interactivo de productos con filtros avanzados en tiempo real. |
| 4 | **Compra de Producto** | HTML + CSS + JavaScript | Ficha técnica y pasarela para la adquisición de un artículo específico. |

---

## ⚡ Implementación de JavaScript

Crear cada producto manualmente en HTML habría sido ineficiente, repetitivo y poco escalable. Por ello, optimizamos el desarrollo utilizando **estructuras de datos (Arrays) y funciones**, logrando un código limpio, modular y mantenible.

### 1. Renderizado Automático de Productos (Market)
Para evitar cientos de líneas de código redundantes, los productos se dividieron en 4 categorías principales dentro de arreglos:

```javascript
let productosN = []
let productosPS = []
let productosXBOX = []
let accesorios = []
```

A través de la manipulación del DOM y el método .forEach(), automatizamos la creación de tarjetas visuales en el HTML:

```JavaScript
function CrearTarjetas(array, div) {
  array.forEach((producto) => {
    let divtarjeta = `<div>EJEMPLO</div>`
    div.innerHTML += divtarjeta
  })
}
```

2. Filtrado Intuitivo
El sistema de navegación y filtros combina eventos del DOM (addEventListener), estilos dinámicos de CSS y el poder de las funciones flecha para ofrecer una experiencia rápida:

```JavaScript
boton.addEventListener("click", () => { Ejemplo() })

section.style.display = "flex"

function OcultarSections() {}

```
3. Páginas Dinámicas mediante Query Parameters
Para no crear un archivo .html por cada uno de los cientos de productos, conectamos el Market con la página de detalles usando Query Parameters en la URL. Cada objeto del Array tiene una propiedad única llamada slug. Al hacer clic en un producto, su slug se envía a la URL.

La página de destino lee este parámetro dinámicamente:

```JavaScript
const parametro_url = new URLSearchParams(window.location.search)
const slug_buscado = parametro_url.get("slug")
let producto_encontrado

buscar_producto(slug_buscado)
crearContenedor()
```
Para localizar el artículo exacto de manera eficiente, implementamos el método .find() de JavaScript:

```JavaScript
producto_encontrado = productosN.find(p => p.slug === slug)

```

💡 Resultado: Gracias a esta lógica orientada a datos, la página de detalles se genera al 100% con JavaScript, manteniendo el archivo HTML base con menos de 60 líneas de código.

👥 Desarrolladores
Proyecto creado con pasión por estudiantes de Ingeniería en Sistemas "C":

Fernando Reynoso

Andru Chen

Angel Yuman

Para comprender a profundidad la arquitectura, los métodos y la lógica empleada, te invitamos a explorar el código fuente, el cual ha sido estructurado para ser completamente legible, limpio e interesante.
