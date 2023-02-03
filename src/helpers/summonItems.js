import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../config/storebackend.js";

export async function getItems(db) {
  const itemsCol = collection(db, "ShopItems");
  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map((item) => item.data());
  console.log(itemsList);
  return itemsList;
}
