export function cleanDataForFocus(idnumber, array) {
  //idnumber is an index
  //this needs to drop every index from the array not at the idnumber index
  let index = Number(idnumber);

  return array[index];
}
