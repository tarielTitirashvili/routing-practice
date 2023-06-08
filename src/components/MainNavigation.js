import css from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  const isActive = ({isActive})=>isActive ? css.active : ''

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
           <NavLink to='/' className={isActive} end>Home</NavLink>
          </li>
          <li>
           <NavLink to='/events' className={isActive}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
