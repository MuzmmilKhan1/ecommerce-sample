import {
  GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, updateProfile
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEAPI,
  authDomain: process.env.REACT_APP_FIREBASEDOMAIN,
  projectId: process.env.REACT_APP_FIREBASEPROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGE,
  appId: process.env.REACT_APP_FIREBASEAPPID,
  measurementId: process.env.REACT_APP_FIREBASEMEASURMENTID,
  // storageBucket: 'gs://ecommerce-sample-f922b.appspot.com'
  // databaseURL: process.env.REACT_APP_FIREBASEDATABASE
  // No Secret
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// eslint-disable-next-line
const database = getDatabase(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    // eslint-disable-next-line
    const res = await createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line
      .then(async (res) => {
        await updateProfile(auth.currentUser, { displayName: name })
      }).catch((err) => { console.log(err) })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent to your email!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const dataArray = [];



const getDataFromFirestore1 = async () => {
  try {
    const citiesRef = collection(db, 'products');
    const snapshot = await getDocs(citiesRef);
    snapshot.forEach(doc => {
      dataArray.push(doc.data());
    });
  } catch (err) {
    console.error(err);
    alert('Failed to retrieve data from Firestore');
  }
};


// Call the function to retrieve data
getDataFromFirestore1();

export {
  auth,
  db,
  storage,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  dataArray,
  app
};
