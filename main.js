console.log("Conectado!")
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-pr').classList.toggle('show');
});
ScrollReveal().reveal('.contenedor');
ScrollReveal().reveal('.nueva-entrada');
ScrollReveal().reveal('.art-cards', { delay: 1000 });
ScrollReveal().reveal('.social', { delay: 1000 });
ScrollReveal().reveal('.hmundo', { delay: 1000 });
ScrollReveal().reveal('.cont-footer', { delay: 1000 });