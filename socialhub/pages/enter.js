import { async } from "@firebase/util";
import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup } from 'firebase/auth'

export default function EnterPage() {

    const user = null;
    const username = null;



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

function SignOutButton(params) {
    return (
        <button onClick={() => auth.signOut()}>
            SignOut
        </button>
    )
}

function UsernameForm(params) {
    return (
        <>
            EnterPage
        </>
    )
}