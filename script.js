let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (nav) {
        if (menuVisible) {
            nav.classList.remove("responsive");
            menuVisible = false;
        } else {
            nav.classList.add("responsive");
            menuVisible = true;
        }
    }
}

function seleccionar() {
    const nav = document.getElementById("nav");
    if (nav) {
        nav.classList.remove("responsive");
        menuVisible = false;
    }
}

function efectoHabilidades() {
    const skills = document.getElementById("skills");
    if (skills) {
        const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            const habilidades = document.getElementsByClassName("progreso");
            for (let i = 0; i < habilidades.length; i++) {
                switch (i) {
                    case 0:
                        habilidades[i].classList.add("javascript");
                        break;
                    case 1:
                        habilidades[i].classList.add("htmlcss");
                        break;
                    case 2:
                        habilidades[i].classList.add("photoshop");
                        break;
                    case 3:
                        habilidades[i].classList.add("wordpress");
                        break;
                    case 4:
                        habilidades[i].classList.add("drupal");
                        break;
                    case 5:
                        habilidades[i].classList.add("comunicacion");
                        break;
                    case 6:
                        habilidades[i].classList.add("trabajo");
                        break;
                    case 7:
                        habilidades[i].classList.add("creatividad");
                        break;
                    case 8:
                        habilidades[i].classList.add("dedicacion");
                        break;
                    case 9:
                        habilidades[i].classList.add("proyect");
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

window.addEventListener("scroll", efectoHabilidades);

document.getElementById("downloadButton").addEventListener("click", function() {
    const pdfUrl = "CV/HV- Manuel Hernandez.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MAHR-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
