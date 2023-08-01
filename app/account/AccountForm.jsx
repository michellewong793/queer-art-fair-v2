'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm( props ) {
  const supabase = createClientComponentClient()
  const profile = props?.profile
  const [name, setName] = useState(profile?.name)
  const [email, setEmail] = useState(profile?.email)
  
  async function updateProfile() {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        name,
        email: user?.email,
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} disabled />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <button
          onClick={() => updateProfile({ name, email })}>
          Update Profile
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button type="submit">
            Sign out
          </button>
        </form>
      </div>
    </>
  )
}