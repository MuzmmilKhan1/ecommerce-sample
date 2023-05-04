import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase"; // Import the storage and db instances from your firebase.js file

const uploadProduct = async (name, description, price, image) => {
  try {

    // Add product information to Firestore
    await addDoc(collection(db, 'products'), {
      name,
      description,
      price,
      imageUrl: image
    });

  } catch (error) {
    console.error("Error uploading product: ", error);
    throw error;
  }
  window.location.reload();
};

export default uploadProduct;
