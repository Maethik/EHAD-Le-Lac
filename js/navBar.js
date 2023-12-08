const presentationLink = document.querySelector("presentation-link");
const sousMenuPresentation = document.querySelector("sous-menu-presentation");

presentationLink.addEventListener("click", null, () => {
    console.log('OUIII');
    sousMenuPresentation.classList.toggle("active");
});
