import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGallery = galleryItems.map((e) => {
  const galarryItemEl = `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${e.preview}
      data-source=${e.original}
      alt=${e.description}
    />
  </a>
  </div>`;
  console.log(galarryItemEl);
  return galarryItemEl;
  //   const galarryItem = document.createElement(`div`);
  //   galarryItem.classList.add(`gallery__item`);
  //   const makeItemLink = () => {
  //     const galleryItemLink = document.createElement(`a`);
  //     galleryItemLink.classList.add(`gallery__link`);
  //     const makeImg = () => {
  //       const imgItem = document.createElement(`img`);
  //       imgItem.classList.add(`gallery__image`);
  //       imgItem.src = e.preview;
  //       imgItem.dataSource = e.original;
  //       imgItem.alt = e.description;
  //       return imgItem;
  //     };
  //     galleryItemLink.append(makeImg());
  //     return galleryItemLink;
  //   };
  //   galarryItem.append(makeItemLink());
  //   return galarryItem;

  // const galaryEl = document.querySelector(`.gallery`);
  // const makeGaleryEL = ({ url, alt } = {}) =>
  //   `<li class="gallery__item"><a href=""><img src=${url} alt=${alt} width="300" height="200"
  //     style= margin:20px></a></li>`;

  // const makeGaleryBrutforce = images.map((el) => makeGaleryEL(el)).join("");
  // galaryEl.insertAdjacentHTML("beforeend", makeGaleryBrutforce);
});
makeGallery.join("");
galleryEl.append(...makeGallery);
// galarryItemEl.insertAdjacentHTML("beforeend");

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
