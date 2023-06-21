import signInWithGoogle from "../utils/signInWithGoogle"

export default function Login() {
    return(
        <>
        <h3>Login</h3>
        <button onClick={() => signInWithGoogle()}>Sign in</button>
        </>
        
    )
}