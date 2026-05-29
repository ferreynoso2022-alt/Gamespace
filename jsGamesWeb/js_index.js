const section_home = document.getElementById("section_home")
const section_productos = document.getElementById("section_productos")
const section_footer = document.getElementById("section_footer")
const section_mv = document.getElementById("mv")
const b_conocenos = document.getElementById("b_conocenos")
const promos_section = document.getElementById("promos_section")
const destacadosdiv = document.getElementById("destacadosdiv")
const promosdiv = document.getElementById("promosdiv")

let destacados = [
    {nombre: "Playstation 5 Slim", imagen: "ps5.png", precio: "Q 6199", marca: "PlayStation"},
    {nombre: "Consola Nintendo Switch 2", imagen: "switch2.png", precio: "Q 6999", marca: "Nintendo"},
    {nombre: "Xbox Series X", imagen: "xboxseriesx.png", precio: "Q 6299", marca: "Xbox"}
]
let promos = [
    {nombre: "Playstation 4", imagen: "ps4.png", precio: "Q 3499", marca: "PlayStation"},
    {nombre: "Consola Nintendo Switch", imagen: "switch.png", precio: "Q 3499", marca: "Nintendo"},
    {nombre: "EA FC 26", imagen: "fifa26.png", precio: "Q 699", marca: "PlayStation"}
]


window.addEventListener('load', () => {
    CrearTarjetas(destacados,destacadosdiv)
    CrearTarjetas(promos,promosdiv)
});

function CrearTarjetas(array, div){
    
    array.forEach((producto) => {
        let divtarjeta = 
        `<div id="tarjeta_producto" class="tarjeta_producto">
            <a id="tarjeta" class="tarjeta" href="Market-AFA.html">
                <div id="imagen_tarjeta" class="imagen_tarjeta"><img class="img_producto" src="assetsproducto/${producto.imagen}" alt="${producto.nombre}"></div>
                <div id="info_tarjeta" class="info_tarjeta">
                    <div id="titulo_tarjeta" class="titulo_tarjeta">${producto.nombre}</div>
                    <div id="precio_tarjeta" class="precio_tarjeta">${producto.precio}<sup>.00</sup></div>
                </div>
            </a>
        </div>`

        div.innerHTML += divtarjeta
    })
}


    /*window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });*/