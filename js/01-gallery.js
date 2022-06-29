import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGallery = galleryItems.map((e) => {
  const galarryItem = document.createElement(`div`);
  galarryItem.classList.add(`gallery__item`);
  const makeItemLink = () => {
    const galleryItemLink = document.createElement(`a`);
    galleryItemLink.classList.add(`gallery__link`);
    const makeImg = () => {
      const imgItem = document.createElement(`img`);
      imgItem.classList.add(`gallery__image`);
      imgItem.src = e.preview;
      imgItem.dataSource = e.original;
      imgItem.alt = e.description;
      return imgItem;
    };
    galleryItemLink.append(makeImg());
    return galleryItemLink;
  };
  galarryItem.append(makeItemLink());
  return galarryItem;
});
galleryEl.append(...makeGallery);

galleryEl.addEventListener(`click`, (e) => {
  if (e.target.nodeName === `DIV`) {
    return;
  }
  const instance = basicLightbox.create(
    `<div class="modal">
    <img
    src=${e.target.dataSource}
    />
    </div>`
  );
  instance.show(instance);

  const modalEl = document.querySelector(".basicLightbox");

  modalEl.addEventListener(`click`, (e) => {
    if (e.target.nodeName === `IMG`) {
      instance.close(instance);
      modalEl.removeEventListener;
    }
  });
});
