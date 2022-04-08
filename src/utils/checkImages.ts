export function checkImages(imgs: any) {
  let imgsArr = new Set();

  for (let image in imgs) {
    imgsArr.add(image);
  }

  if (imgsArr.has('original')) return imgs.original;
  if (imgsArr.has('large')) return imgs.large;
  if (imgsArr.has('small')) return imgs.small;
  if (imgsArr.has('tiny')) return imgs.tiny;

  return 'https://coltivi.com/public/img/placeholder.png';
}
