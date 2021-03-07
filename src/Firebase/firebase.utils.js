import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQhfNbtSwYly44d0t_Qi0ZKGTmCLDeviE",
  authDomain: "recipes-31ebf.firebaseapp.com",
  projectId: "recipes-31ebf",
  storageBucket: "recipes-31ebf.appspot.com",
  messagingSenderId: "108280543235",
  appId: "1:108280543235:web:1eceb2ec93caa31a227636",
  measurementId: "G-683T0J5C7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        favouriteRecipes: [],
      });
     

    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  console.log(userRef);
  return userRef;

};



export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firestore2 = firebase.firestore;


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promppt: "Select Account" });
export const signinwithGoogle = () => auth.signInWithPopup(provider);


export default firebase;