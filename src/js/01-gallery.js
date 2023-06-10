import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

const createCardPicture = galleryItems.map(({ preview, original, description }) => {
  return ` 
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`;
});

listGallery.insertAdjacentHTML('beforeend', createCardPicture.join(''));
