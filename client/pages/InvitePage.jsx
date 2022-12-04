import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { getEventByInviteCode } from '../apiClient/event'
import { createGuestApi } from '../apiClient/guest'

export default function InvitePage() {
  const initialState = { name: '', guest_code: '', invite_id: '' }
  const [event, setNewEvent] = useState(initialState)
  const [guestName, setGuestName] = useState('')
  const { invite_id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getEventByInviteCode(invite_id)
      .then((event) => {
        setNewEvent(event)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newGuest = {
      name: guestName,
      event_id: invite_id,
    }

    try {
      const guest = await createGuestApi(newGuest)
      navigate(`/wishlist/${guest.guest_code}`)
    } catch (err) {
      err.message
    }
  }

  return (
    <>
      <h1>InvitePage</h1>
      <h2>{event?.event_name}</h2>
      <h3>{event?.date}</h3>
      <h3>Budget: ${event?.budget}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          value={guestName}
          name='name'
          onChange={(event) => setGuestName(event.target.value)}
        />
        <button type='submit'>Accept</button>
      </form>
    </>
  )
}
