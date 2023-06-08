import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_EVENTS } from './events'

function EventDetail() {
  const params = useParams()
  return (
    <section>
      <h1>eventDetail</h1>
      <h4>Event ID: {params.eventId}</h4>
    </section>
  )
}

export default EventDetail