// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQyR1nbgZEmZaKgU-7WT0pA_BbWWlZUSA",
  authDomain: "contoh-judi-online.firebaseapp.com",
  databaseURL: "https://contoh-judi-online-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contoh-judi-online",
  storageBucket: "contoh-judi-online.appspot.com",
  messagingSenderId: "210939919406",
  appId: "1:210939919406:web:97f2196cf488e0f56633bf"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

