export function cleanForCarousel(array) {
  let favourited = array.filter((item) => item.favourited === true);

  return favourited;
}
