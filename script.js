/* =========================================
   IR AL REGALO
========================================= */

function irAlRegalo() {

    const regalo =
        document.getElementById("regalo");

    regalo.scrollIntoView({
        behavior: "smooth"
    });

    lanzarConfeti();
}


/* =========================================
   ABRIR REGALO
========================================= */

function abrirRegalo() {

    const regalo =
        document.getElementById("gift");

    const mensaje =
        document.getElementById("giftMessage");


    regalo.classList.toggle("open");


    if (regalo.classList.contains("open")) {

        mensaje.innerHTML =
            "🎉 ¡SORPRESA! ¡Feliz cumpleaños, tío! ❤️";

        lanzarConfeti();


    } else {

        mensaje.innerHTML =
            "Tocá la caja 🎁";

    }

}


/* =========================================
   CONFETI
========================================= */

function lanzarConfeti() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const confeti =
            document.createElement("div");


        confeti.className =
            "confetti";


        confeti.style.left =
            Math.random() * 100 + "vw";


        const colores = [

            "#e74c3c",
            "#f1c40f",
            "#3498db",
            "#9b59b6",
            "#2ecc71",
            "#e67e22",
            "#ff69b4"

        ];


        confeti.style.background =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];


        confeti.style.animationDuration =
            (2 + Math.random() * 4) + "s";


        confeti.style.animationDelay =
            Math.random() * 1.5 + "s";


        confeti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            confeti
        );


        setTimeout(
            () => confeti.remove(),
            7000
        );

    }

}


/* =========================================
   CONFETI AL CARGAR
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            lanzarConfeti,
            800
        );

    }
);