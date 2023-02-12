export function cleanForCarousel(array) {
  let favourited = array.filter((item) => item.favourited === true);
  //just in case someone unfavourites everything
  if (favourited.length === 0) {
    return array;
  } else return favourited;
}
