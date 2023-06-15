import css from './MainNavigation.module.css';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root')
  const isActive = ({isActive})=>isActive ? css.active : ''
  console.log(token)
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
          {
          token ?
              <Form action='/logout' method='post' >
                <button>
                  logout
                </button>
              </Form>
          :
          <li>
          <NavLink to='/auth?mode=login' className={isActive}>Authentication</NavLink>
         </li>
        }
        </ul>

         <div className={css.end}>
            <NewsletterSignup/>
          </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
