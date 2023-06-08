import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errorPage'
import EventsLayout from './layout/eventsLayout'
import RootLayout from './layout/rootLayout'
import EditEvent from './pages/EditEvent'
import EventDetail, { eventLoader } from './pages/EventDetail'
import Events, { getDummyEvents } from './pages/events'
import Home from './pages/home'
import NewEvent from './pages/NewEvent'
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components



const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: 'events', element: <EventsLayout/>, children: [
          {index: true, element: <Events/>, loader: getDummyEvents},
          {
            path: ':eventId', 
            children: [
              {index: true, element: <EventDetail /> ,loader: eventLoader},
              {path: ':edit', element: <EditEvent/>},
            ]
          },
          {path: 'new', element: <NewEvent /> },
        ]},
      ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
