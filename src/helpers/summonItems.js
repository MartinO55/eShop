import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/storebackend.js";
//import db here then you dont need to do it anywhere else

export async function getItems() {
  const database = db;
  const itemsCol = collection(database, "ShopItems");
  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map((item) => item.data());
  return itemsList;
}

//in theory this should do something - in practice, I am looking at the code and I have no idea how to go from page ID(index of array) to the hexadecimal ID for the item (without already having the item anyway)
export async function getItemByID(idVar) {
  const database = db;
  const itemsCol = collection(database, "ShopItems", idVar);

  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map((item) => item.data());
  return itemsList;
}
