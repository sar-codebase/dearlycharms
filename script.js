// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYacavvlelD-shkEAXjX0QcPazx-aOzHc",
  authDomain: "dearlycharms.firebaseapp.com",
  projectId: "dearlycharms",
  storageBucket: "dearlycharms.firebasestorage.app",
  messagingSenderId: "944631041243",
  appId: "1:944631041243:web:08b52d4d6ae0c6b0b6d0fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

console.log("Firebase connected successfully for DearlyCharms!");

// Example function to fetch products live from the cloud database
async function loadProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (e) {
    console.error("Error loading products: ", e);
  }
}

// Run the loader when page opens
loadProducts();
