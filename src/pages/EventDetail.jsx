import React, { Suspense } from 'react'
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'
import Loader from '../components/loader'
import { getAuthToken } from '../utils/auth'
import { getEvents } from './events'

function EventDetail() {
  const {event, events} = useRouteLoaderData('eventId')
  return (<>
    <Suspense fallback={<Loader/>}>
      <Await resolve={event}>
        {(event)=><EventItem event={event} />}
      </Await>
    </Suspense>
    <Suspense fallback={<Loader/>}>
      <Await resolve={events}>
        {(events)=><EventsList events={events}/>}
      </Await>
    </Suspense>
    </>
  )
}

export default EventDetail

async function getEvent(eventId){
  const response = await fetch('http://localhost:8080/events/'+eventId)
  if(response.status !== 200){
    throw json(response, { status: 500 })
  }else{
    const resData = await response.json()
    return resData.event
  }
}

export async function eventLoader({request, params}) {
  const eventId = params.eventId
  return defer({
    // by this approach we will wait until event data is loaded and only after that change route
    event: await getEvent(eventId),
    events: getEvents()
  })
}

export async function eventDeleteAction({request, params:{eventId}}) {
  try{
    await fetch('http://localhost:8080/events/'+eventId, {
      method: request.method,
      headers:{
        'authorization': 'Bearer ' + getAuthToken()
      }
    })
    return redirect('/events')
  }catch(e){
    throw json(response, { status: 500 })
  }
}