export function cleanForCarousel(array) {
  let favourited = array.filter((item) => item.favourited === true);
  //console.log(favourited);
  return favourited;
}
