const abc ="dd"




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClLeHQJMt3BzbrK_AHpWeq0nlqzY2r5ik",
    authDomain: "money-39797.firebaseapp.com",
    projectId: "money-39797",
    storageBucket: "money-39797.appspot.com",
    messagingSenderId: "142963352306",
    appId: "1:142963352306:web:ac3c09e593009a5175666b",
    measurementId: "G-012VKYDZ07"
};


const app = initializeApp(firebaseConfig);


import { getFirestore, collection, getDocs,doc,getDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';


const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'spends');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;
}


async function getSpend(db) {
    const docRef = doc(db, "spends", "123");
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data())
    // return docSnap
}


const docRef = doc(db, "spends", "123");
    const docSnap = await getDoc(docRef);

// var docRef = collection(db,"spends").doc('123');


// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
   
   





// export const foo = Math.sqrt(2); 
export const foo = docSnap.data(); 

export default {
    foo    
} 












