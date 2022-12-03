import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { getUserWithUsername, postToJSON, firestore} from '../../lib/firebase';
import { query, collection, where, orderBy, limit} from 'firebase/firestore'

export async function getServerSideProps({ prop }) {
  const username = prop ;

  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  let user = null;
  let posts = null;

  
  if (userDoc) {
    user = userDoc.data();
    const postsQuery = query(
      collection(firestore, userDoc.ref, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(5))
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts },
  };
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
}
