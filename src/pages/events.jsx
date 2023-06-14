import { Suspense } from 'react'
import { Await, defer, json, useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'
import Loading from '../components/loader'

export async function getEvents() {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // throw new Response(JSON.stringify({ isError: true, message: 'Couldn\'t get events' }), { status: 500 })
    throw json({ message: 'Couldn\'t get events' }, {status: 500})
  } else {
    const resData = await response.json()
    return resData.events
  }
}

export const loadDummyEvents = () => {
  return defer({
    events: getEvents(),
  })
}

function EventsPage() {
  const { events } = useLoaderData()

  return (
    <Suspense fallback={<Loading/>}>
      <Await resolve={events}>
        {/* we get resolved data here */}
        {(events)=><EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage