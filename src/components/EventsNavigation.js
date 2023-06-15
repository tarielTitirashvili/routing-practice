import { NavLink, useRouteLoaderData } from 'react-router-dom';
import css from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData('root')

  const isActive = ({isActive})=>isActive ? css.active : ''

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/events" className={isActive} end >All Events</NavLink>
          </li>
          {
          token && <li>
            <NavLink to="/events/new" className={isActive}>New Event</NavLink>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
