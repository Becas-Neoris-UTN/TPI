const $navbar = document.querySelector("nav")
const $footer = document.querySelector("footer")

$navbar.innerHTML = `
<div class="nav-logo"></div>
    <div class="bar-container">
        <div class="bar-item"><a href="index.html">Inicio</a></div>
        <div class="bar-item"><a href="nosotros.html">Nosotros</a></div>
        <div class="bar-item" id="courses">Cursos
            <div class="dropdown">
                <a href="cursos.html">Niños</a>
                <a href="cursos_adol.html">Adolescentes</a>
                <a href="cursos_adult.html">Adultos</a>
                <a href="exam.html">Examenes</a>
            </div>
        </div>
    <div class="bar-item"><a href="form.html">Contacto</a></div>
</div>`



$footer.innerHTML = ` 
<p>Copyright 2022 by. All rights reserved</p>
<div class="site-map">
    <a href="index.html">Inicio</a>
    <a href="nosotros.html">Nosotros</a>
    <a href="cursos.html">Cursos</a>
    <a href="form.html">Contacto</a>
</div>`

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


