import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

function EventDetail() {
  const data = useRouteLoaderData('eventId')
  // console.log(data)
  return (
    <EventItem event={data.event} />
  )
}

export default EventDetail

export async function eventLoader({request, params}) {
  // request gets access to the query string params
  // params gets access to the route path params
    const response = await fetch('http://localhost:8080/events/'+params.eventId)
    // console.log(response)
    if(response.status !== 200){
      throw new Response(response, { status: 500 })
    }else
      return response
}