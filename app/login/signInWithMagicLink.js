import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function signInWithMagicLink(props) {
    const supabase = createClientComponentClient();

    const { data, error } = await supabase.auth.signInWithOtp({
        email: props.email,
        options: {
            emailRedirectTo: 'localhost:3000/account',
        }
    })

    if (error) {
        console.log(error)
    }
}