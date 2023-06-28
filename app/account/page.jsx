'use client'

import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import Strawberry from "../../components/Strawberry";
import getUser from "../../utils/getUser";
import supabaseClient from "../../utils/supabaseClient";

export default function Account () {

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [venmo, setVenmo] = useState(null)
  const [instagram, setInstagram] = useState(null)
  const [signInEmail, setSignInEmail] = useState(null)
  
  useEffect(() => {

    async function getProfile() {
      setLoading(true)
      const user = await getUser()
      setSignInEmail(user.email)
      let { data, error } = await supabaseClient
        .from('profiles')
        .select('name, email, instagram, venmo')
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setName(data.name)
        setEmail(data.email)
        setVenmo(data.venmo)
        setInstagram(data.instagram)
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
      name,
      email,
      venmo,
      instagram,
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
      <p>Email used to sign in: {signInEmail}</p>
      <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="instagram">Instagram</label>
        <input
          id="instagram"
          type="text"
          value={instagram || ''}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="venmo">Venmo</label>
        <input
          id="venmo"
          type="text"
          value={venmo || ''}
          onChange={(e) => setVenmo(e.target.value)}
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