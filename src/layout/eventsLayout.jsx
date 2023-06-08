import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

function EventsLayout() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  )
}

export default EventsLayout