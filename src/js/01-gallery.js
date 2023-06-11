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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
});

listGallery.insertAdjacentHTML('beforeend', createCardPicture.join(''));

listGallery.addEventListener('click', showPicture);

function showPicture(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== img) {
    return;
  }
  console.log('🚀evt.target', evt.target);
}

const instance = basicLightbox.create(document.querySelector('template')`
	    <img src="${evt.dataSet.source}" width="600" height="400"/>
	`);
instance.show();
