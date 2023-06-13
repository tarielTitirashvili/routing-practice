import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

function EditEvent() {
  const data = useRouteLoaderData('eventId')
  // console.log(data)
  return (
    <EventForm event = {data.event} method="patch" />
  )
}

export default EditEvent