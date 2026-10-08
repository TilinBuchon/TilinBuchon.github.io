/* ==============================
   MENÚ PARA CELULAR
============================== */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("show");

});


/* ==============================
   CERRAR MENÚ AL SELECCIONAR
============================== */

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});


/* ==============================
   MODO OSCURO
============================== */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* ==============================
   ANIMACIONES AL HACER SCROLL
============================== */

const revealElements = document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==============================
   BOTÓN DE COMPROMISO
============================== */

const actionButton =
    document.getElementById("actionButton");

const commitment =
    document.getElementById("commitment");


actionButton.addEventListener("click", () => {

    commitment.classList.toggle("show");


    if (commitment.classList.contains("show")) {

        actionButton.textContent =
            "💚 Mi compromiso";

    } else {

        actionButton.textContent =
            "🌱 Ver mi compromiso";

    }

});