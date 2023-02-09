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

export async function getItemByID(idVar) {
  const database = db;
  const itemsCol = collection(database, "ShopItems", idVar);

  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map((item) => item.data());
  return itemsList;
}
