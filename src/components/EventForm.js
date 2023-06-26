import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import { getAuthToken } from '../utils/auth';

import classes from './EventForm.module.css';

function EventForm({ method, event={} }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData()
  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }
  function getData(obj, key, nullValue='') {
    return obj[key] ? obj[key] : nullValue
  }
  return (
    <Form method={method} className={classes.form}>
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

export async function newAndEditEventAction({request, params}) {


  const method = request.method

  const data = await request.formData()

  let url = 'http://localhost:8080/events'
  if(method.toLowerCase()==='patch') 
    url = url + '/' + params.eventId

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  const response = await fetch(url,{
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'bearer ' + getAuthToken()
    },
    body: JSON.stringify(eventData)
  })
  if(response.status === 422){
    return response
  }
  if(response.status===500){
    throw json({ message: 'Couldn\'t create event' }, {status: 500})
  }else{
    return redirect('/events')
  }
}