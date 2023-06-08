import { json } from 'react-router-dom'
import EventsList from '../components/EventsList'

export const getDummyEvents = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    throw new Response(JSON.stringify({ isError: true, message: 'Couldn\'t get events' }), { status: 500 })
    // this custom json function needs more time to test it properly
    return json({ message: 'Couldn\'t get events teriel' }, {status: 500})
  } else {
    const resData = await response.json()
    return resData.events
  }
}

function EventsPage() {

  return (
    <>
      <EventsList />
    </>
  );
}

export default EventsPage