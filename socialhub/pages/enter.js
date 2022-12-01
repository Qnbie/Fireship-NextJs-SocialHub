import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup , signOut } from 'firebase/auth'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage() {
    
    const { user, username } = useContext(UserContext)

    return (
        <main>
        {user ?
            ! username ? <UsernameForm/> : <SignOutButton/>
            :
            <SignInButton/>
        }
        </main>
    )
}

function SignInButton() {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider);
    }


    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} />
        </button>
    )
}

function SignOutButton() {
    return (
        <button onClick={() => signOut(auth)}>
            SignOut
        </button>
    )
}

function UsernameForm() {
    return (
        <>
            UsernameForm
        </>
    )
}