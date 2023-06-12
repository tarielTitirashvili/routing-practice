import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event={} }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData()
  console.log(actionData)
  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }
  function getData(obj, key, nullValue='') {
    return obj[key] ? obj[key] : nullValue
  }
  return (
    <Form method='post' className={classes.form}>
      {actionData && actionData.errors && <ul>
        {Object.values(actionData.errors).map(err=>(
          <li key={err}>{err}</li>
        ))}
      </ul>}
      
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={getData(event, 'title')} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={getData(event, 'image')}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={getData(event, 'date')}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={getData(event, 'description')}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting? 'Submitting...':'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
