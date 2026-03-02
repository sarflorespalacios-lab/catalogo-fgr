import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";

// Detecta si es móvil
function esMovil() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export const loginConGoogle = async () => {
  if (esMovil()) {
    // En celular usa redirect
    await signInWithRedirect(auth, provider);
  } else {
    // En computadora usa popup
    await signInWithPopup(auth, provider);
  }
};