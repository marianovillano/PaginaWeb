//Acuse de recibo
console.log("Conectado! - Connected! - Ligado! - Collegato!")
//Llamado de menú al tocar el botón menu-btn 
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-pr').classList.toggle('show');
});
//Retrasos de 1 segundo con ScrollReveal
ScrollReveal().reveal('.art-cards', { delay: 1000 });
ScrollReveal().reveal('.social', { delay: 1000 });
ScrollReveal().reveal('.hmundo', { delay: 1000 });
ScrollReveal().reveal('.cont-footer', { delay: 1000 });
//Retrasos de 500 milisegundos
ScrollReveal().reveal('.contenido', { delay: 500 });
ScrollReveal().reveal('.divconsola', { delay: 500 });
ScrollReveal().reveal('.img-mini-simple',{delay:500});
ScrollReveal().reveal('.ecuaciones',{delay:500});
ScrollReveal().reveal('.reduc50',{delay:500});
ScrollReveal().reveal('.pfooter',{delay:500});