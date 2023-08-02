'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Label from '../components/forms/Label'
import Input from '../components/forms/Input'
import { useState } from 'react'
import styles from './AccountEditForm.module.css'


export default function AccountEditForm( props ) {
  const supabase = createClientComponentClient()
  const profile = props?.profile
  const [name, setName] = useState(profile?.name)
  const [email, setEmail] = useState(profile?.email)
  
  async function updateProfile(e) {
    e.preventDefault()
    try {
      let { error } = await supabase
      .from('profiles')
      .update({
        name: name,
      })
      .eq('id', profile.id)

      if (error) throw error
      alert('Your profile was updated.')

    } catch (error) {
      alert('Error. We could not update your profile.')
    }
  }

  return (
    <>
      <form 
        onSubmit={(e) => updateProfile(e)}
      >
        <h3>Account Details</h3>

        <Label>Email</Label>
        <Input 
        className={styles.input}
        type="text" 
        value={email} 
        disabled={true} />

        <Label>Name</Label>
        <Input
          className={styles.input}
          type="text"
          placeholder='Your name'
          value={name || ''}
          onChange={(data) => setName(data.value)}
        />

        <Input
          className={styles.input}
          type='submit'
          value='Update profile'
        />
      </form>
    </>
  )
}