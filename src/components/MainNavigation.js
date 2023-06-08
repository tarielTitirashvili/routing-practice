import css from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  const isActive = ({isActive})=>isActive ? css.active : ''

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <a><NavLink to='/' className={isActive} end>Home</NavLink></a>
          </li>
          <li>
            <a><NavLink to='/events' className={isActive}>Events</NavLink></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
