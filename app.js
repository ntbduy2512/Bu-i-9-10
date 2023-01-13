import {app, database} from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {collection, addDoc, getDocs} from "firebase/firestore"
// auth
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//database
const collectionRef = collection(database, "users")
addDoc(collectionRef, {
    email: data.email,
    password: data.password
})

.then(()=>{
    alert("data added");})
.catch((err)=> {
    alert(err.message);
})
const docRef = doc(db, "cities", "SF");

// Get a document, forcing the SDK to fetch from the offline cache.
try {
  const doc = await getDocFromCache(docRef);

  // Document was found in the cache. If no cached document exists,
  // an error will be returned to the 'catch' block below.
  console.log("Cached document data:", doc.data());
} catch (e) {
  console.log("Error getting cached document:", e);
}