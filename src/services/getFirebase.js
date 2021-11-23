import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzD-yDTRLM8BtgJs7k0Yt4tbUYfc8uWN4",
  authDomain: "pancentaje.firebaseapp.com",
  projectId: "pancentaje",
  storageBucket: "pancentaje.appspot.com",
  messagingSenderId: "654692437512",
  appId: "1:654692437512:web:f38c3cdd3fbdf3b0974bbd",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
