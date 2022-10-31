const $navbar = document.querySelector("nav")
const $footer = document.querySelector("footer")

$navbar.innerHTML = `
<div class="nav-logo"></div>
    <div class="bar-container">
        <div class="bar-item"><a href="index.html">Inicio</a></div>
        <div class="bar-item"><a href="nosotros.html">Nosotros</a></div>
        <div class="bar-item"><a href="sobre_mi.html">Sobre mi</a></div>
        <div class="bar-item" id="courses">Cursos
            <div class="dropdown">
                <a href="cursos.html">Niños</a>
                <a href="cursos_adol.html">Adolescentes</a>
                <a href="cursos_adult.html">Adultos</a>
                <a href="exam.html">Examenes</a>
            </div>
        </div>
        <div class="bar-item"><a href="tu_curso.html">Tu curso</a></div>
    <div class="bar-item"><a href="form.html">Contacto</a></div>
</div>`



$footer.innerHTML = ` 
<p>Copyright 2022. All rights reserved</p>
<div class="site-map">
    <a href="index.html">Inicio</a>
    <a href="nosotros.html">Nosotros</a>
    <a href="sobre_mi.html">Sobre mi</a>
    <a href="cursos.html">Cursos</a>
    <a href="tu_curso.html">Tu curso</a>
    <a href="form.html">Contacto</a>
</div>

<div id="boton_whatsapp">
        <a class="boton_whatsapp" href="https://wa.me/5491166098123/?text=Hola,%20Welcomed%20English%20Bernal!" target="_blank">
            <img src="imagenes/whatsapp.png">
        </a>
</div>
`

const $nav = document.querySelector(".main")
const $dropdown = document.querySelector(".dropdown")
const $courses = document.querySelector("#courses")
let topOfNav = $nav.offsetTop

function recalculateOffsetTop() {
    window.scrollTo(0, 0)
    topOfNav = $nav.offsetTop
    return topOfNav
}

function fixNav() {
    if (this.scrollY >= topOfNav) {
        $nav.classList.add("fixed-nav")

    } else {
        $nav.classList.remove("fixed-nav")
    }
}

function showDropdownMenu(e) {
    $dropdown.classList.add("hovered")
}

function hideDropdownMenu() {
    $dropdown.classList.remove("hovered")
}

$courses.addEventListener("mouseenter", showDropdownMenu)
$courses.addEventListener("mouseleave", hideDropdownMenu)
window.addEventListener("scroll", fixNav)
window.addEventListener("resize", recalculateOffsetTop)


// For button

const $startNow_Button = document.querySelector(".start-now_button")

$startNow_Button.onclick = function () {
    location.href = "form.html"
}


//Boton Whastapp


document.getElementsByTagName("footer").innerHTML=footer
let boton_whatsapp =`
        <a class="boton_whatsapp" href="https://wa.me/5491166098123/?text=Hola,%20Welcomed%20English%20Bernal!" target="_blank">
            <img src="imagenes/whatsapp.png" class="boton_whatsapp">
        </a>
`
document.getElementById("boton_whatsapp").innerHTML=boton_whatsapp

