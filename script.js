/* ---------------------------------------------
   PORTAFOLIO PERSONAL
   Actividad Integradora 2
   Alexander Córdova
--------------------------------------------- */


/* ---------------------------------------------
   VARIABLES
--------------------------------------------- */

const themeButton = document.getElementById("theme-button");

const infoButton = document.getElementById("info-button");

const extraInfo = document.getElementById("extra-info");

const welcomeMessage = document.getElementById("welcome-message");

const currentDate = document.getElementById("current-date");

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

const nombreInput = document.getElementById("nombre");

const correoInput = document.getElementById("correo");

const mensajeInput = document.getElementById("mensaje");


/* ---------------------------------------------
   FUNCIÓN 1
   CAMBIAR MODO OSCURO
--------------------------------------------- */

function cambiarTema() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Modo claro";

        localStorage.setItem("tema", "oscuro");

    } else {

        themeButton.textContent = "🌙 Modo oscuro";

        localStorage.setItem("tema", "claro");

    }

}


/* ---------------------------------------------
   EVENTO 1: CLICK
--------------------------------------------- */

themeButton.addEventListener("click", cambiarTema);


/* ---------------------------------------------
   RECUPERAR TEMA GUARDADO
   LOCALSTORAGE
--------------------------------------------- */

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Modo claro";

}


/* ---------------------------------------------
   FUNCIÓN 2
   MOSTRAR / OCULTAR INFORMACIÓN
--------------------------------------------- */

function mostrarInformacion() {

    extraInfo.classList.toggle("show");

    if (extraInfo.classList.contains("show")) {

        infoButton.textContent =
            "Mostrar menos información";

    } else {

        infoButton.textContent =
            "Mostrar más información";

    }

}


/* ---------------------------------------------
   EVENTO 2: CLICK
--------------------------------------------- */

infoButton.addEventListener(
    "click",
    mostrarInformacion
);


/* ---------------------------------------------
   FUNCIÓN 3
   FECHA Y HORA
--------------------------------------------- */

function mostrarFechaHora() {

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString(
        "es-EC",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    const hora = ahora.toLocaleTimeString(
        "es-EC"
    );

    currentDate.textContent =
        "Fecha y hora actual: " +
        fecha +
        " - " +
        hora;

}


/* Mostrar fecha inmediatamente */

mostrarFechaHora();


/* Actualizar cada segundo */

setInterval(
    mostrarFechaHora,
    1000
);


/* ---------------------------------------------
   EVENTO 3: INPUT
   GUARDAR NOMBRE DEL VISITANTE
--------------------------------------------- */

nombreInput.addEventListener(
    "input",
    function () {

        const nombre =
            nombreInput.value.trim();

        if (nombre !== "") {

            localStorage.setItem(
                "nombreVisitante",
                nombre
            );

            welcomeMessage.textContent =
                "¡Hola " +
                nombre +
                "! Gracias por visitar mi portafolio.";

        } else {

            welcomeMessage.textContent =
                "Bienvenido a mi portafolio personal.";

        }

    }
);


/* ---------------------------------------------
   RECUPERAR NOMBRE DEL VISITANTE
--------------------------------------------- */

const nombreGuardado =
    localStorage.getItem("nombreVisitante");


if (nombreGuardado) {

    welcomeMessage.textContent =
        "¡Bienvenido nuevamente, " +
        nombreGuardado +
        "!";

}


/* ---------------------------------------------
   EVENTO 4: SUBMIT
   VALIDACIÓN DEL FORMULARIO
--------------------------------------------- */

contactForm.addEventListener(
    "submit",
    function (event) {

        /* Evita que la página se recargue */

        event.preventDefault();


        const nombre =
            nombreInput.value.trim();

        const correo =
            correoInput.value.trim();

        const mensaje =
            mensajeInput.value.trim();


        /* --------------------------------------------
           ESTRUCTURA CONDICIONAL
        --------------------------------------------- */

        if (
            nombre === "" ||
            correo === "" ||
            mensaje === ""
        ) {

            formMessage.textContent =
                "Por favor, completa todos los campos.";

            formMessage.className =
                "form-message error";

            return;

        }


        /* --------------------------------------------
           MENSAJE DE CONFIRMACIÓN
        --------------------------------------------- */

        formMessage.textContent =
            "¡Mensaje enviado correctamente, " +
            nombre +
            "! Gracias por contactarme.";

        formMessage.className =
            "form-message success";


        /* Guardar nuevamente el nombre */

        localStorage.setItem(
            "nombreVisitante",
            nombre
        );


        /* Cambiar dinámicamente el saludo */

        welcomeMessage.textContent =
            "Gracias por tu mensaje, " +
            nombre +
            ".";


        /* Limpiar formulario */

        contactForm.reset();

    }
);


/* ---------------------------------------------
   EVENTO 5: SCROLL
   BOTÓN VOLVER AL INICIO
--------------------------------------------- */

const topButton =
    document.createElement("button");

topButton.textContent = "↑";

topButton.id = "top-button";

topButton.className = "top-button";

topButton.title = "Volver al inicio";

document.body.appendChild(topButton);


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    }
);


/* ---------------------------------------------
   EVENTO 6: CLICK
   VOLVER AL INICIO
--------------------------------------------- */

topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);