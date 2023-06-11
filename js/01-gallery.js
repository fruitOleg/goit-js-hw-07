import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

listGallery.addEventListener('click', showPicture);

const createCardPicture = galleryItems.map(({ preview, original, description }) => {
  return ` 
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
});

listGallery.insertAdjacentHTML('beforeend', createCardPicture.join(''));

function showPicture(evt) {
  evt.preventDefault();

  const isGalleyImg = evt.target.classList.contains('gallery__image');

  if (!isGalleyImg) {
    return;
  }

  const instance = basicLightbox.create(`
	    <img src="${evt.target.dataset.source}" width="800" height="600"/>
	`);
  instance.show();

  const onEscPress = evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  };

  window.addEventListener('keydown', onEscPress);
}
