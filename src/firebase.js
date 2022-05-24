// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, addDoc, Timestamp, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYSPe--5BHCKnYNEtTQJ4QjEcaBukkmY",
  authDomain: "burger-queen-3e638.firebaseapp.com",
  projectId: "burger-queen-3e638",
  storageBucket: "burger-queen-3e638.appspot.com",
  messagingSenderId: "911096941168",
  appId: "1:911096941168:web:92046f356efbe43ba782b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


export async function Desayuno () {
initializeApp(firebaseConfig)
const querySnapshot = await getDocs(collection(db, "Desayuno"));
const arr =[];
querySnapshot.forEach((doc) => arr.push(Object.assign(doc.data(), {'id': doc.id})))
return arr;
}

export async function MenuDia () {
  initializeApp(firebaseConfig)
  const querySnapshot = await getDocs(collection(db, "Menu-Dia"));
  const arra =[];
  querySnapshot.forEach((doc) => arra.push(Object.assign(doc.data(), {'id': doc.id})))
  return arra;
  }

export async function Refrescos () {
initializeApp(firebaseConfig)
const querySnapshot = await getDocs(collection(db, "Refrescos"));
const array=[];
querySnapshot.forEach((doc) => array.push(Object.assign(doc.data(), {'id': doc.id})))
return array;
}

 export async function AddPedido (objeto) {
 await addDoc(collection(db, "Pedido"),{
  ...objeto,
   fecha: Timestamp.fromDate(new Date()),
   status: "Pendiente",
  });
 }
 
 export async function Carta() {
  initializeApp(firebaseConfig)
  const querySnapshot = await getDocs(collection(db, "Pedido"), orderBy('fecha', 'desc'));
  const arra =[];
  querySnapshot.forEach((doc) => arra.push(Object.assign(doc.data(), {'id': doc.id})))
  return arra;
  }
  