
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCaCebGoo_vKbB1zTaAz-F8wRFuCLTi0aA",
//     authDomain: "student-management-ca8e8.firebaseapp.com",
//     projectId: "student-management-ca8e8",
//     storageBucket: "student-management-ca8e8.firebasestorage.app",
//     messagingSenderId: "198104572929",
//     appId: "1:198104572929:web:6313b200c0ca8cc6f50c00",
//     measurementId: "G-7W47G2KB74"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// export default db
// // const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyBaRQpCWnWjoBHdnqg1EsRYtl723nk6xc8",
//     authDomain: "attendence-f9f4a.firebaseapp.com",
//     projectId: "attendence-f9f4a",
//     storageBucket: "attendence-f9f4a.firebasestorage.app",
//     messagingSenderId: "859795164966",
//     appId: "1:859795164966:web:e48a70d8d95676b2e1bbe7",
//     measurementId: "G-TFXTPJLFCF"
// };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default analytics

// firebaseConfig.js
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaRQpCWnWjoBHdnqg1EsRYtl723nk6xc8",
    authDomain: "attendence-f9f4a.firebaseapp.com",
    projectId: "attendence-f9f4a",
    storageBucket: "attendence-f9f4a.appspot.com",
    messagingSenderId: "859795164966",
    appId: "1:859795164966:web:e48a70d8d95676b2e1bbe7",
    measurementId: "G-TFXTPJLFCF"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Export db to use in other files
export default db;

