import React from 'react'
import { json, redirect } from 'react-router-dom'
import EventForm from '../components/EventForm'

function NewEvent() {
  return (
    <EventForm />
  )
}

export default NewEvent

export async function newEventAction({request, params}) {

  const data = await request.formData()


  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  const response = await fetch('http://localhost:8080/events',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  if(response.status === 422){
    return response
  }
  if(response.status===500){
    throw json({ message: 'Couldn\'t create event' }, {status: 500})
  }else{
    return redirect('/events')
  }
}