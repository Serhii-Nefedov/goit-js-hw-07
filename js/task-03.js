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

const imageContainerEl = document.getElementById('gallery');
imageContainerEl.setAttribute('style', 'list-style-type:none; display: flex');

const makeImageList = images => {
  return images.map(image => {
    const imgLiEl = document.createElement('li');
    const imgEl = document.createElement('img');
    imgEl.src = image.url;
    imgEl.alt = image.alt;
    imgEl.width = 320;
    imgEl.height = 210;
    imgLiEl.appendChild(imgEl);

    return imgLiEl;
  });
};

const imageList = makeImageList(images);
console.log(imageList);
imageContainerEl.append(...imageList);
