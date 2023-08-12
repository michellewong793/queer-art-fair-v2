'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Label from '../components/forms/label'
import Input from '../components/forms/input'
import { useId, useState } from 'react'
import styles from './AccountEditForm.module.css'


export default function AccountEditForm( props ) {
  const supabase = createClientComponentClient()
  const profile = props?.profile
  const [name, setName] = useState(profile?.name)
  const [email, setEmail] = useState(profile?.email)

  const nameId = useId()
  
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
        <h2>Account Details</h2>

        <Label>The following account details (name and email address) are by default not shown to other users. If you list items for sale, your name (if entered) and email address will be shown to customers looking to order your items.</Label>

        <Label>Email</Label>
        {/* <Input 
        className={styles.input}
        type="text" 
        value={email} 
        disabled={true} /> */}
        <p className={styles.input}>{email}</p>

        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
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