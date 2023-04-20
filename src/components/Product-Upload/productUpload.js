import { ref, uploadBytes, getMetadata } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../Firebase"; // Import the storage and db instances from your firebase.js file

const uploadProduct = async (name, description, price, image) => {
  try {
    // Upload image file to Firebase Storage
    const storageRef = ref(storage, `productImages/${image}`);
    await uploadBytes(storageRef, image);

    // Get metadata for the uploaded file
    const metadata = await getMetadata(storageRef);

    // Access metadata properties
    console.log("File size:", metadata.size);
    console.log("Content type:", metadata.contentType);
    console.log("Creation time:", metadata.timeCreated);
    console.log("Update time:", metadata.updated);

    // Add product information to Firestore
    await addDoc(collection(db, 'products'), {
      name,
      description,
      price,
      imageUrl: storageRef.fullPath,
      // You can also add other metadata properties to Firestore
      metadata: {
        size: metadata.size,
        contentType: metadata.contentType,
        timeCreated: metadata.timeCreated,
        updated: metadata.updated,
      },
    });

    // Return the metadata
    return metadata;
  } catch (error) {
    console.error("Error uploading product: ", error);
    throw error;
  }
};

export default uploadProduct;
