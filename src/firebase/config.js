import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDPluTxNLwuH7IhNZC-LoM_vkzyE4mt4aw",
  authDomain: "olx-clone-87737.firebaseapp.com",
  projectId: "olx-clone-87737",
  storageBucket: "olx-clone-87737.appspot.com",
  messagingSenderId: "852103477821",
  appId: "1:852103477821:web:2cd4b8f8a3d11e56544854",
  measurementId: "G-0VDZ3GD4L0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default getFirestore(app);