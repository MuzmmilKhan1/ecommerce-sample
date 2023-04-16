import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../Firebase"; // Import the storage and db instances from your firebase.js file

const uploadProduct = async (name, description, price, image) => {
    try {
      // Upload image file to Firebase Storage
      const storageRef = ref(storage, `productImages/${image.name}`);
      await uploadBytes(storageRef, image);
  
      // Get image download URL
      const downloadURL = await getDownloadURL(storageRef);
  
      // Add product information to Firestore
      await addDoc(collection(db, 'products'), {
        name,
        description,
        price,
        imageUrl: downloadURL,
      });
  
      // Return the download URL
      return downloadURL;
    } catch (error) {
      console.error("Error uploading product: ", error);
      throw error;
    }
  };
  
  export default uploadProduct;