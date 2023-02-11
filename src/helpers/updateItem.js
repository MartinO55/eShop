import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/storebackend";

export function updateItem(itemID, favourite) {
  const itemRef = doc(db, "ShopItems", itemID);

  updateDoc(itemRef, { favourited: favourite }).catch((error) => {
    console.log(error);
  });
}
