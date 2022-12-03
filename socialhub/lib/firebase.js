import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  limit,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAITbwHgl2sHajQvq6SdkIGtEIhPGUm-pw",

  authDomain: "qnlab-socialhub.firebaseapp.com",

  projectId: "qnlab-socialhub",

  storageBucket: "qnlab-socialhub.appspot.com",

  messagingSenderId: "858225706517",

  appId: "1:858225706517:web:2bb461076942375c96b01c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, "users");
  const usersQuery = query(
    usersRef,
    where("username", "==", String(username)),
    limit(1)
  );
  const userDoc = (await getDocs(usersQuery)).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = getData(doc);
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
