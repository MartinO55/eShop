import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/storebackend";

export function updateItem(item, toggle) {
  let itemRef = doc(db, "ShopItems", item);

  updateDoc((itemRef, { favourited: toggle }));
}
