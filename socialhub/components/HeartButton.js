import { firestore, auth } from "../lib/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, writeBatch, increment} from 'firebase/firestore'


export default function Heart({ postRef }) {

  
  const heartRef = doc(postRef, "hearts", auth.currentUser.uid)
  const [heartDoc] = useDocument(heartRef);

  const addHeart = async () => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);

    batch.update(postRef, { heartCount: increment(1) });
    batch.set(heartRef, { uid });

    await batch.commit();
  };

  // Remove a user-to-post relationship
  const removeHeart = async () => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);

    batch.update(postRef, { heartCount: increment(-1) });
    batch.delete(heartRef);

    await batch.commit();
  };

  return heartDoc?.exists() ? (
    <button onClick={removeHeart}>💔 Unheart</button>
  ) : (
    <button onClick={addHeart}>💗 Heart</button>
  );
}
