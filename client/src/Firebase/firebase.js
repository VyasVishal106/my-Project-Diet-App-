// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//     apiKey: "AIzaSyCt4LAG-SCpgSl4ah9BQMfb7_BEZv8E04E",
//     authDomain: "hackathon-59c99.firebaseapp.com",
//     projectId: "hackathon-59c99",
//     storageBucket: "hackathon-59c99.appspot.com",
//     messagingSenderId: "683711079138",
//     appId: "1:683711079138:web:5eea13dce8f400633974bb",
//     measurementId: "G-5MB5XSBQYV"
// };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore'; 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCt4LAG-SCpgSl4ah9BQMfb7_BEZv8E04E",
//   authDomain: "hackathon-59c99.firebaseapp.com",
//   projectId: "hackathon-59c99",
//   storageBucket: "hackathon-59c99.appspot.com",
//   messagingSenderId: "683711079138",
//   appId: "1:683711079138:web:5eea13dce8f400633974bb",
//   measurementId: "G-5MB5XSBQYV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app)
// const firestore = getFirestore(app); 

// export {app , auth,  firestore }











// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo1t7LPAxGlqItrACD8XoWrRnmkImSLs8",
  authDomain: "moviep1.firebaseapp.com",
  projectId: "moviep1",
  storageBucket: "moviep1.appspot.com",
  messagingSenderId: "749974570096",
  appId: "1:749974570096:web:9abcba0fcbd79733aa20b5",
  measurementId: "G-8ZK0SZ3674"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app); // In

export {app , auth,  firestore }