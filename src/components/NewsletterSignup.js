import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher()
  const {Form, data, state} = fetcher

  useEffect(()=>{
    // idle is state in which we don't executing this action or loader or submitting
    if(state === 'idle' && data && data.message)
      alert(data.message)
  }, [data, state])

  return (
    <Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;
