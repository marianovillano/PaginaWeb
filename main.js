//Acuse de recibo
console.log("Conectado!")
//Llamado de menú al tocar el botón menu-btn 
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-pr').classList.toggle('show');
});
//Llamado de rutinas scroll reveal
ScrollReveal().reveal('.contenedor');
ScrollReveal().reveal('.nueva-entrada');
//Retrasos de 1 segundo
ScrollReveal().reveal('.art-cards', { delay: 1000 });
ScrollReveal().reveal('.social', { delay: 1000 });
ScrollReveal().reveal('.hmundo', { delay: 1000 });
ScrollReveal().reveal('.cont-footer', { delay: 1000 });