import supabaseClient from "./supabaseClient";

export default async function getUser() {
    const { data, error } = await supabaseClient.auth.getSession()

    const { session, proto } = data
    const user = session.user

    console.log("Running getUser")    
    return user
}