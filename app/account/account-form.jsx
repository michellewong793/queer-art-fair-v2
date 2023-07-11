'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`name, email`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setName(data.name)
        setEmail(data.email)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ name, email }) {
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
        <input type="text" value={session?.user.email} disabled />
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
          onClick={() => updateProfile({ name, email })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
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