import supabaseClient from "./supabaseClient";

export default async function getUser() {
    const { data: { user } } = await supabaseClient.auth.getUser()
    return user
}