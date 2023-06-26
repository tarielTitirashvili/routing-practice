import { json, redirect } from 'react-router-dom';
import AuthForm, { MODES } from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function loginSignUpAction ({request}){
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') || 'login'
  const data = await request.formData()
  if(mode !== MODES.login && mode !== MODES.signup){
    throw json({message: 'unsupported mode'}, {status: 422})
  }
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }
  const response = await fetch(`http://localhost:8080/${mode}`,{
   method: 'POST',
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(authData)
  })
  if(response.status === 422 || response.status === 401)
    return response
  else if(!response.ok)
    throw json({message: 'Could not authenticate user.'}, {status: 500})
  else{
    const resData = await response.json()
    const token = resData.token

    localStorage.setItem('token', token)
    const expirationDate = new Date()
    expirationDate.setHours(expirationDate.getHours() + 1)
    localStorage.setItem('expiration', expirationDate.toISOString())
    
    return redirect('/')
  }
}