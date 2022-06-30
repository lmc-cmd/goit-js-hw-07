import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGalleryArr = galleryItems.map((e) => {
  const galarryItemEl = `<div class="gallery__item">
  <a class="gallery__link" href="${e.original}">
  <img
  class="gallery__image"
  src=${e.preview}
  data-source=${e.original}
  alt=${e.description}
  />
  </a>
  </div>`;
  return galarryItemEl;
});

const makeGallery = makeGalleryArr.join("");
galleryEl.insertAdjacentHTML("afterbegin", makeGallery);

galleryEl.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (e.target.nodeName === `IMG`) {
    const instance = basicLightbox.create(
      `<div class="modal">
      <img
      src=${e.target.dataset.source}
      />
      </div>`
    );
    instance.show(instance);

    const modalEl = document.querySelector(".basicLightbox");

    modalEl.addEventListener(`click`, (e) => {
      if (e.target) {
        instance.close(instance);
      }
      modalEl.removeEventListener;
    });
  }
});
