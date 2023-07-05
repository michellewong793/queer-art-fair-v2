import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function signInWithMagicLink(props) {
    const supabase = createClientComponentClient();

    const { data, error } = await supabase.auth.signInWithOtp({
        email: props.email,
        options: {
            emailRedirectTo: 'http://localhost:3000/auth/callback',
        }
    })

    if (error) {
        console.log(error)
    }
}