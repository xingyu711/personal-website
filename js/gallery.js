const IMAGES = [
  {
    imgPath: 'img/gallery/atom-and-libai.jpg',
    imgName: 'Atom and Li Bai',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom-and-offer.jpg',
    imgName: 'Atom and Offer in Christmas costume',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom1.jpg',
    imgName: 'Little Atom',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom2.jpg',
    imgName: 'Atom eating his foot',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom3.jpg',
    imgName: 'Atom playing on the beach',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom4.jpg',
    imgName: 'Cute Atom',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/atom5.jpg',
    imgName: 'Atom is a golden retriever',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/libai1.jpg',
    imgName: 'Li Bai is a maltipoo',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/offer1.jpg',
    imgName: 'Offer is a maltipoo',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/offer2.jpg',
    imgName: 'Offer watching you',
    imgFilter: 'filter-dogs',
  },
  {
    imgPath: 'img/gallery/life1.jpg',
    imgName: 'Summer at Bucknell University',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life2.jpg',
    imgName: 'Santa Cruz',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life3.jpg',
    imgName: 'Spring at Bucknell University',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life4.jpg',
    imgName: 'Winter at Bucknell University',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life5.jpg',
    imgName: 'Sky',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life6.jpg',
    imgName: 'Panda',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life7.jpg',
    imgName: 'Sunset at Bucknell University',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life8.jpg',
    imgName: 'Kayaking on Susquehanna River',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life9.jpg',
    imgName: 'New York City Night View',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/life10.jpg',
    imgName: 'Chongqing Night View',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/me1.jpg',
    imgName: 'Me at aquarium',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/me2.jpg',
    imgName: 'Me in San Francisco',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/me3.jpg',
    imgName: 'Me at Golden Gate Bridge',
    imgFilter: 'filter-life',
  },
  {
    imgPath: 'img/gallery/me4.jpg',
    imgName: 'My birthday 2020',
    imgFilter: 'filter-life',
  },
];

function getImageHtml(imgPath, imgName, filterName) {
  return `<div class="col-lg-4 col-md-6 gallery-item ${filterName}">
            <div class="gallery-wrap">
              <img src="${imgPath}" class="img-fluid" alt="">
              <div class="gallery-info">
                <h4>${imgName}</h4>
                <div class="gallery-links">
                  <a href="${imgPath}" data-gallery="galleryGallery" class="gallery-lightbox" title="${imgName}"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>`;
}

function insertImages() {
  const galleryContainer = document.querySelector('.gallery-container');
  let innerHtml = '';

  IMAGES.sort(() => Math.random() - 0.5);

  for (const image of IMAGES) {
    const { imgPath, imgName, imgFilter } = image;
    innerHtml += getImageHtml(imgPath, imgName, imgFilter);
  }

  galleryContainer.innerHTML = innerHtml;
}

insertImages();
