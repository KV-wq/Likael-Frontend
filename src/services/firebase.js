import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDuE40hIJ3VkNe0EjLNWeHdIOlHbCZthh8",
  authDomain: "likael-mini-app.firebaseapp.com",
  databaseURL:
    "https://likael-mini-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "likael-mini-app",
  storageBucket: "likael-mini-app.firebasestorage.app",
  messagingSenderId: "73565101263",
  appId: "1:73565101263:web:3461db3d88a0314d422bba",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const createRef = (path) => ref(database, path);

export { database, createRef, ref, onValue, set, push, remove };
