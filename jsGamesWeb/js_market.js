//aside
const btnMenu = document.getElementById("menu");
const aside = document.getElementById("aside");
const overlay = document.getElementById("overlay");

//sections productos
const market_title_section = document.getElementById("market_title_section")
const nintendo_section = document.getElementById("nintendo_section")
const playstation_section = document.getElementById("playstation_section")
const xbox_section = document.getElementById("xbox_section")
const accesorios_section = document.getElementById("accesorios_section")

let all_sections = [
    nintendo_section,
    playstation_section,
    xbox_section,
    accesorios_section
]
let sections_to_hide = [

]

//div productos
const productos_nintendo = document.getElementById("productos_nintendo")
const productos_playstation = document.getElementById("productos_playstation")
const productos_xbox = document.getElementById("productos_xbox")
const productos_accesorios = document.getElementById("accesorios")

//botones aside
const aside_all = document.getElementById("aside_all")
const aside_nintendo = document.getElementById("aside_nintendo")
const aside_ps = document.getElementById("aside_ps")
const aside_xbox = document.getElementById("aside_xbox")
const aside_accesorios = document.getElementById("aside_accesorios")


let productosN = [
    {slug: "nintendo-switch-2", nombre: "Consola Nintendo Switch 2", imagen: "switch2.png", precio: "Q 6999", marca: "Nintendo"},
    {slug: "nintendo-switch", nombre: "Consola Nintendo Switch", imagen: "switch.png", precio: "Q 3499", marca: "Nintendo"},
    {slug: "zelda-totk", nombre: "Zelda Tears Of The Kingdom", imagen: "zelda_totk.jpg", precio: "Q 449", marca: "Nintendo"},
    {slug: "zelda-botw", nombre: "Zelda Breath Of The Wild", imagen: "zelda_botw.jpg", precio: "Q 449", marca: "Nintendo"},
    {slug: "super-mario-wonder", nombre: "Super Mario Wonder", imagen: "mario_wonder.jpg", precio: "Q 449", marca: "Nintendo"},
    {slug: "super-mario-addyssey", nombre: "Super Mario Oddyssey", imagen: "mario_oddysey.avif", precio: "Q 449", marca: "Nintendo"},
    {slug: "mario-kart-world", nombre: "Mario Kart World", imagen: "mario_kart_world.webp", precio: "Q 875", marca: "Nintendo"},
    {slug: "super-mario-galaxy-pack", nombre: "Super Mario Galaxy + Super Mario Galaxy 2", imagen: "mario_galaxy.jpg", precio: "Q 449", marca: "Nintendo"},
    {slug: "super-mario-3d-world", nombre: "Super Mario 3D World", imagen: "mario_3d_world.jpg", precio: "Q 449", marca: "Nintendo"},
    {slug: "fc-26", nombre: "FC 26 para Nintendo Switch 2", imagen: "fc26_switch2.jpg", precio: "Q 875", marca: "Nintendo"},
    {slug: "donkey-kong-bananza", nombre: "Donkey Kong Bananza para Nintendo Switch 2", imagen: "dk_bananza.webp", precio: "Q 875", marca: "Nintendo"},
    {slug: "cyberpunk-switch-2", nombre: "Cyberpunk para Nintendo Switch 2", imagen: "cyberpunk_switch2.jpg", precio: "Q 875", marca: "Nintendo"},
]
let productosPS = [
    {slug:"playstation-5-slim", nombre: "Playstation 5 Slim", imagen: "ps5.png", precio: "Q 6199", marca: "PlayStation"},
    {slug:"playstation-4", nombre: "Playstation 4", imagen: "ps4.png", precio: "Q 3499", marca: "PlayStation"},
    {slug:"the-last-of-us-ii", nombre: "The Last Of Us II", imagen: "the_last_of_us_2.jpg", precio: "Q 679", marca: "PlayStation"},
    {slug:"spiderman-2", nombre: "Spiderman 2", imagen: "spiderman2.jpg", precio: "Q 679", marca: "PlayStation"},
    {slug:"returnal", nombre: "Returnal", imagen: "returnal.jpg", precio: "Q 545", marca: "PlayStation"},
    {slug:"ratchet-clank", nombre: "Ratchet Clank", imagen: "ratchet_clank.jpg", precio: "Q 545", marca: "PlayStation"},
    {slug:"horizon-forbidden-west", nombre: "Horizon Forbidden West", imagen: "horizon.jpg", precio: "Q 679", marca: "PlayStation"},
    {slug:"gran-turismo-7", nombre: "Gran Turismo 7", imagen: "gran_turismo_7.jpg", precio: "Q 545", marca: "PlayStation"},
    {slug:"god-of-war-ragnarok", nombre: "God Of War Ragnarok", imagen: "god_of_war_ragnarok.jpg", precio: "Q 679", marca: "PlayStation"},
    {slug:"final-fantasy-xvi", nombre: "Final Fantasy XVI", imagen: "final_fantasy_xvi.jpg", precio: "Q 545", marca: "PlayStation"},
    {slug:"ea-fc-26", nombre: "EA FC 26", imagen: "fifa26.png", precio: "Q 699", marca: "PlayStation"},
    {slug:"demons-souls", nombre: "Demon's Souls", imagen: "demons_souls.jpeg", precio: "Q 545", marca: "PlayStation"},
]
let productosXBOX = [
    {slug: "xbox-series-x", nombre: "Xbox Series X", imagen: "xboxseriesx.png", precio: "Q 6299", marca: "Xbox"},
    {slug: "xbox-series-s", nombre: "Xbox Series S", imagen: "xboxseriess.avif", precio: "Q 3699", marca: "Xbox"},
    {slug: "ea-ufc-26", nombre: "EA UFC 26", imagen: "ufc26_xbox.webp", precio: "Q 625", marca: "Xbox"},
    {slug: "starfield", nombre: "Starfield", imagen: "starfield_xbox.webp", precio: "Q 600", marca: "Xbox"},
    {slug: "pragmata", nombre: "Pragmata", imagen: "pragmata_xbox.webp", precio: "Q 615", marca: "Xbox"},
    {slug: "hitman", nombre: "Hitman", imagen: "hitman_xbox.webp", precio: "Q 450", marca: "Xbox"},
    {slug: "halo-infinite", nombre: "Halo Infinite", imagen: "halo_xbox.jpeg", precio: "Q 625", marca: "Xbox"},
    {slug: "forza-horizon", nombre: "Forza Horizon", imagen: "forza_horizon_xbox.avif", precio: "Q 600", marca: "Xbox"},
    {slug: "ea-fc-26", nombre: "EA FC 26", imagen: "fc26_xbox.webp", precio: "Q 650", marca: "Xbox"},
    {slug: "call-of-duty-modern-warfare-ii", nombre: "Call Of Duty Modern Warfare II", imagen: "callofduty_mw.jpg", precio: "Q 610", marca: "Xbox"},
    {slug: "battlefield", nombre: "Battlefield", imagen: "battlefield_xbox.webp", precio: "Q 580", marca: "Xbox"},
    {slug: "ea-2k16", nombre: "EA 2K16", imagen: "2k26_xbox.webp", precio: "Q 550", marca: "Xbox"},
];
let accesorios = [
    {slug: "cargador-usb-c-para-nintendo-switch", nombre: "Cargador USB C para Nintendo Switch", imagen: "cargador_switch.jpg", precio: "Q 495", marca: "Accesorio"},
    {slug: "control-yellow-ps5", nombre: "Control Yellow PS5", imagen: "colorcontrolps5.jpg", precio: "Q 625", marca: "Accesorio"},
    {slug: "control-sense-switch", nombre: "Control Sense Switch", imagen: "control_switch.jpg", precio: "Q 860", marca: "Accesorio"},
    {slug: "estuche-para-nintendo-switch", nombre: "Estuche para Nintendo Switch", imagen: "estuche_switch.jpg", precio: "Q 275", marca: "Accesorio"},
    {slug: "pedales-para-ps5", nombre: "Pedales para PS5", imagen: "pedalesps5.jpg", precio: "Q 860", marca: "Accesorio"},
    {slug: "control-dual-sense-ps5", nombre: "Control Dual Sense PS5", imagen: "controlps5.png", precio: "Q 575", marca: "Accesorio"},
    {slug: "joycons-para-nintendo-switch", nombre: "Joycons para Nintendo Switch", imagen: "joycon.jpg", precio: "Q 800", marca: "Accesorio"},
    {slug: "peluche-de-pokemon", nombre: "Peluche de Pokemon", imagen: "peluchepokemon.jpg", precio: "Q 275", marca: "Accesorio"},
    {slug: "set-de-conduccion-para-ps5", nombre: "Set de Conduccion para PS5", imagen: "timon_ps.png", precio: "Q 1200", marca: "Accesorio"},
    {slug: "amibo-super-mario-galaxy", nombre: "Amibo Super Mario Galaxy", imagen: "amibo.jpg", precio: "Q 475", marca: "Accesorio"},
    {slug: "amibo-rosalina-super-mario-galaxy", nombre: "Amibo Rosalina Super Mario Galaxy", imagen: "rosalina.jpg", precio: "Q 475", marca: "Accesorio"},
];

aside_all.addEventListener("click", () => {MostrarSections()})
aside_nintendo.addEventListener("click", () => { Escuchadores(nintendo_section,playstation_section,xbox_section,accesorios_section)})
aside_ps.addEventListener("click", () => { Escuchadores(playstation_section,nintendo_section,xbox_section,accesorios_section)})
aside_xbox.addEventListener("click", () => { Escuchadores(xbox_section,nintendo_section,playstation_section,accesorios_section)})
aside_accesorios.addEventListener("click", () => { Escuchadores(accesorios_section,nintendo_section,playstation_section,xbox_section)})

function Escuchadores(showdiv,hide1,hide2,hide3){
    showdiv.style.display = "flex"
    sections_to_hide.push(hide1,hide2,hide3)
    OcultarSections()
}

function OcultarSections(){
    sections_to_hide.forEach((section) => {section.style.display = "none"})
    aside.classList.remove("active");
    overlay.classList.remove("active");
    window.scrollTo({top: 0,behavior: 'smooth'});
    sections_to_hide = []
}

function MostrarSections(){
    all_sections.forEach((section) =>{section.style.display = "flex"}) 
    aside.classList.remove("active");
    overlay.classList.remove("active");
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Función para abrir/cerrar
btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    aside.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Cerrar al hacer clic en el overlay
overlay.addEventListener('click', () => {
    aside.classList.remove("active");
    overlay.classList.remove("active");
});

window.addEventListener("load", ()=>{
    CrearTarjetas(productosN, productos_nintendo)
    CrearTarjetas(productosPS, productos_playstation)
    CrearTarjetas(productosXBOX, productos_xbox)
    CrearTarjetas(accesorios, productos_accesorios)
})

//Creacion de Tarjetas
function CrearTarjetas(array, div){
    
    array.forEach((producto) => {
        let divtarjeta = 
        `<div id="tarjeta_producto" class="tarjeta_producto-AFA">
            <a id="tarjeta" class="tarjeta-AFA" href="compratarjeta-AFA.html?slug=${producto.slug}">
                <div id="imagen_tarjeta" class="imagen_tarjeta-AFA"><img class="img_producto-AFA" src="assetsproducto/${producto.imagen}" alt="${producto.nombre}"></div>
                <div id="info_tarjeta" class="info_tarjeta-AFA">
                    <div id="titulo_tarjeta" class="titulo_tarjeta-AFA">${producto.nombre}</div>
                    <div id="marca_tarjeta" class="marca_tarjeta-AFA">${producto.marca}</div>
                    <div id="precio_tarjeta" class="precio_tarjeta-AFA">${producto.precio}<sup>.00</sup></div>
                    
                </div>
            </a>
        </div>`

        div.innerHTML += divtarjeta
    })
}
