import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGallery = galleryItems.map((e) => {
  // const galarryItem = document.createElement(`div`);
  // galarryItem.classList.add(`gallery__item`);
  const makeItemLink = () => {
    const galleryItemLink = document.createElement(`a`);
    galleryItemLink.classList.add(`gallery__link`);
    galleryItemLink.href = e.original;
    const makeImg = () => {
      const imgItem = document.createElement(`img`);
      imgItem.classList.add(`gallery__image`);
      imgItem.src = e.preview;
      // imgItem.dataSource = e.original;
      imgItem.alt = e.description;
      return imgItem;
    };
    galleryItemLink.append(makeImg());
    return galleryItemLink;
  };
  galleryEl.append(makeItemLink());
  // return galarryItem;
});
// galleryEl.append(...makeGallery);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionData: "alt",
  navtext: ["<~", "~>"],
});
