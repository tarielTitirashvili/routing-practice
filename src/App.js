import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errorPage'
import { newAndEditEventAction } from './components/EventForm'
import EventsLayout from './layout/eventsLayout'
import RootLayout from './layout/rootLayout'
import EditEvent from './pages/EditEvent'
import EventDetail, { eventDeleteAction, eventLoader } from './pages/EventDetail'
import Events, { loadDummyEvents } from './pages/events'
import Home from './pages/home'
import NewEvent from './pages/NewEvent'
import NewsletterPage from './pages/Newsletter'
import {action as newNewsletterAction} from './pages/Newsletter'
import AuthenticationPage, { loginSignUpAction } from './pages/Authentication'
// Challenge / Exercise

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: 'events', element: <EventsLayout/>, children: [
          {index: true, element: <Events/>, loader: loadDummyEvents},
          {
            path: ':eventId', 
            id: 'eventId',
            loader: eventLoader,
            children: [
              {index: true, element: <EventDetail />, action: eventDeleteAction, },
              {path: ':edit', element: <EditEvent/>, action: newAndEditEventAction},
            ]
          },
          {path: 'new', element: <NewEvent /> , action: newAndEditEventAction},
        ]},
        {
          path: 'newsLetter', element: <NewsletterPage/>, action: newNewsletterAction
        },
        {
          path: 'auth', element: <AuthenticationPage/>, action: loginSignUpAction
        },
      ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
