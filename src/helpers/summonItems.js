import { collection, getDocs } from "firebase/firestore";

export async function getItems(db) {
  const itemsCol = collection(db, "ShopItems");
  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map((item) => item.data());
  return itemsList;
}