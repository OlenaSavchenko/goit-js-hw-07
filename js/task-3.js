const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createItemRef = image => {
  const itemGalleryRef = document.createElement('li');
  itemGalleryRef.classList.add('item');

  const itemImageRef = document.createElement('img');
  itemImageRef.src = image.url;
  itemImageRef.alt = image.alt;
  itemImageRef.classList.add('image');

  itemGalleryRef.append(itemImageRef);

  return itemGalleryRef;
};

const createGalleryRef = images.map(image => createItemRef(image));
const galleryListRef = document.querySelector('#gallery');
galleryListRef.append(...createGalleryRef);
