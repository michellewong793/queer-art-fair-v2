import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import getUser from "../utils/getUser";
import supabaseClient from "../utils/supabaseClient";

export default function Account () {

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [full_name, setFullName] = useState(null)
  
  useEffect(() => {

    async function getProfile() {
      setLoading(true)
      const user = await getUser()
      let { data, error } = await supabaseClient
        .from('profiles')
        .select('username, full_name')
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setFullName(data.full_name)
      }
      setLoading(false)
    }
    getProfile()
  }, [])

  async function updateProfile(event) {
    event.preventDefault()

    setLoading(true)
    const user = await getUser()

    const updates = {
      id: user.id,
      username,
      full_name,
      updated_at: new Date(),
    }

    let { error } = await supabaseClient.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  return (
      <>
      <Navigation />
      <Strawberry heading="YOUR ACCOUNT" showLargeStrawberry='none'/>
      <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          type="text"
          required
          value={full_name || ''}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div>
        <button className="button block primary" type="submit" disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" type="button" onClick={() => supabaseClient.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </form>
      </>
  )
}