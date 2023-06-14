import css from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

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
          <li>
           <NavLink to='/newsletter' className={isActive}>newsletter</NavLink>
          </li>
          <li>
           <NavLink to='/auth?mode=login' className={isActive}>Authentication</NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup/>
    </header>
  );
}

export default MainNavigation;
