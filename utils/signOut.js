import supabaseClient from "../utils/supabaseClient";

export default async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
}