import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

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

import { getFirestore, collection, getDocs, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore(app);
// 單筆
const docRef = doc(db, "spends", "123");
const docSnap = await getDoc(docRef);

// 全部
const citiesCol = collection(db, 'spends');
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());



// export const foo = Math.sqrt(2); 
export const foo = docSnap.data();
export const spends = cityList;

export default {
    foo,
    spends
}












