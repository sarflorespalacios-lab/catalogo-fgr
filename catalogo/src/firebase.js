import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPN0ZnMvAreumvMHwNp_EOxU_xaAXR_Do",
  authDomain: "catalogo-fgr.firebaseapp.com", // ← este se queda así
  projectId: "catalogo-fgr",
  storageBucket: "catalogo-fgr.firebasestorage.app",
  messagingSenderId: "801403810777",
  appId: "1:801403810777:web:90fe2165ee2aff0075dfc8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence);