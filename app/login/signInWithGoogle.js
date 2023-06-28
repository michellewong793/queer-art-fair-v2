import supabaseClient from "./supabaseClient";

export default async function signInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/auth/callback'
        }
    })
}