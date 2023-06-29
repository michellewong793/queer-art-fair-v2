import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function signInWithGoogle() {
    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/auth/callback'
        }
    })
}