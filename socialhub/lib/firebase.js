import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyAITbwHgl2sHajQvq6SdkIGtEIhPGUm-pw",
  
    authDomain: "qnlab-socialhub.firebaseapp.com",
  
    projectId: "qnlab-socialhub",
  
    storageBucket: "qnlab-socialhub.appspot.com",
  
    messagingSenderId: "858225706517",
  
    appId: "1:858225706517:web:2bb461076942375c96b01c"
  
};
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);