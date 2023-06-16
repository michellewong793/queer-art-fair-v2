import signInWithGoogle from "../utils/signInWithGoogle"
import signOut from "../utils/signOut";

const AccountButtons = (props) => {
    return (
        <>
            <button onClick={() => signInWithGoogle()}>Sign in</button>
        </>
    )
}

export default AccountButtons;