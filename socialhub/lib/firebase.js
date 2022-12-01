import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyAITbwHgl2sHajQvq6SdkIGtEIhPGUm-pw",
  
    authDomain: "qnlab-socialhub.firebaseapp.com",
  
    projectId: "qnlab-socialhub",
  
    storageBucket: "qnlab-socialhub.appspot.com",
  
    messagingSenderId: "858225706517",
  
    appId: "1:858225706517:web:2bb461076942375c96b01c"
  
};
  
if(!firebase.getApps.length){
    const app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();