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

export const addFavouriteRecipe = async (favourites, userID) => {
  const db = firestore;

  const userRef = db.collection("users").doc(userID);
 
  if (userRef) {
    return userRef.update({
      "favouriteRecipes": firestore2.FieldValue.arrayUnion(favourites)
    })
      .then(function () {
        console.log("Document successfully written!");
        console.log(userRef)
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  } else {
    console.log(favourites)
  }

};

export const addRecipe = (recipeName, category, keyWords, description, image, link, userName, ratings) => {
  const db = firestore;

    const recipeRef = db.collection("recipes").doc("UNcXO3PbVZIsE42CDX8J");
    const createdAt = new Date();
 
  if (recipeRef) {
    return recipeRef.update({
      "UsersRecipes": firestore2.FieldValue.arrayUnion({
        name: recipeName,
        category: category,
        key: keyWords,
        description: description,
        image: image,
        link: link,
        userName: userName,
        ratings: [],
        createdAt,
      })
    })
      .then(function () {
        console.log("Document successfully written!");
        console.log(recipeRef)
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  } else {
    console.log(recipeRef)
  }

};

export const deleteFavourite = async (recipe, userID) => {
  const db = firestore;

  const userRef = db.collection("users").doc(userID);

  if (userRef) {
    return userRef.update({
      "favouriteRecipes": firestore2.FieldValue.arrayRemove(recipe)
    })
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error deleting document: ", error);
      });

  } else {
    console.log(recipe)
  }

};



export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firestore2 = firebase.firestore;


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promppt: "Select Account" });
export const signinwithGoogle = () => auth.signInWithPopup(provider);


export default firebase;