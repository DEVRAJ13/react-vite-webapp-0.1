import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

// Save customer info to Firestore
export const saveCustomerInfo = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "customers"), {
      ...data,
      createdAt: new Date().toISOString(),
    });
    console.log("Customer saved with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error saving customer info:", error);
    throw error;
  }
};
