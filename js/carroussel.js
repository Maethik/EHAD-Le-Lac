const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = carousel.childElementCount;
const imageWidth = 100; // Largeur en pourcentage d'une image

function showImage(index) {
  const offset = -index * imageWidth;
  carousel.style.transform = `translateX(${offset}vw)`;

  // Masquer ou afficher les boutons en fonction de l'index
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  nextBtn.style.display = index === totalImages - 1 ? 'none' : 'block';
}

function prevImage() {
  currentIndex = Math.max(0, currentIndex - 1);
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = Math.min(totalImages - 1, currentIndex + 1);
  showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Afficher la première image au chargement de la page
showImage(currentIndex);