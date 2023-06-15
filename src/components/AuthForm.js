import { useState } from 'react';
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

export const MODES = {
  login: 'login',
  signup: 'signup',
  submitting: 'submitting'
}

function AuthForm() {
  // this hooks has second function for setting query params
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === MODES.login
  const data = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === MODES.submitting

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && <ul>
          {Object.values(data.errors).map(err=>(
            <li key={err}>{err}</li>
          ))}
        </ul> }
        {
          data && data.message && <p>{data.message}</p>
        }
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? MODES.signup: MODES.login}`} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{ isSubmitting? 'Saving' : 'Save' }</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
