document.addEventListener('DOMContentLoaded', function() {
    const triggerButton = document.getElementById('presentation-link');
    const targetElement = document.getElementById('sous-menu-presentation');

    const accueilButton = document.getElementById('accueil-link');
    const accueilElement = document.getElementById('sous-menu-accueil');

    const adminButton = document.getElementById('administration-link');
    const adminElement = document.getElementById('sous-menu-administration');

    const servicesButton = document.getElementById('services-link');
    const servicesElement = document.getElementById('sous-menu-services');

    triggerButton.addEventListener('mouseenter', function() {
        changeVisibility(targetElement);
    });

    accueilButton.addEventListener('mouseenter', function() {
        changeVisibility(accueilElement);
    });

    adminButton.addEventListener('mouseenter', function() {
        changeVisibility(adminElement);
    });

    servicesButton.addEventListener('mouseenter', function() {
        changeVisibility(servicesElement);
    });
});

function changeVisibility(element) {
    if (element.style.visibility === 'hidden' || getComputedStyle(element).visibility === 'hidden') {
        element.style.visibility = 'visible';
    } else {
        element.style.visibility = 'hidden';
    }
}

const navbar = document.getElementById('header');
const background = document.getElementById('background');
const logo = document.getElementById('logo');

window.onscroll = function() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        navbar.classList.add('small');
        background.classList.add('small');
        logo.classList.add('small');
    } else {
        navbar.classList.remove('small');
        background.classList.remove('small');
        logo.classList.remove('small');
    }
};