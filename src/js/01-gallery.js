// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена 
// через npm(синтаксис import /export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";



// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
    </a>
    </li>`
).join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);


    const cardLigthBox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom', captionsData: `alt`, captionDelay: 250});
console.log(cardLigthBox);
