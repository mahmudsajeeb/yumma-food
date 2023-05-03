import React, { useContext } from 'react' 
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase.config';

function Login() {
  const auth = getAuth(app)
  console.log(app)
  const {signIn} = useContext(AuthContext)

  const gooleprovider = new GoogleAuthProvider()
  const handleGoogle =()=>{
      signInWithPopup(auth,gooleprovider)
      .then(result =>{
        const signUser = result.user
        console.log(signUser)
      }).catch(error =>{
        console.log(error,error.message)
      })
  }

  const githubProvider = new GithubAuthProvider()
  const handleGithub =()=>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const signUser = result.user
      console.log(signUser)
    }).catch(error =>{
      console.log(error,error.message)
    })
  }
  const handleLogin =(e)=>{
    e.preventDefault()
    const form = e.target; 
    const email = form.email.value; 
    const password = form.password.value;
    console.log( email,password)

    signIn(email,password)
    .then(result =>{
      const loggUser = result.user;
      console.log(loggUser)
    }).catch(error =>{
      console.log(error.message)
    })
  }
  return (
    
    <div>
    <h1 className='text-center text-4xl'>Please Login</h1>
      
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
      <button className="btn btn-outline w-full btn-error">Login</button>
  
      </div>
      
      <p className="inline-block align-baseline font-bold text-sm  " >
          Don't Have Account?<Link to='/register'>Register</Link>
        </p>
        <br />
        <button className='btn btn-outline btn-error' onClick={handleGoogle}>Sign in Google</button>
        <button className='btn btn-outline btn-error' onClick={handleGithub}>Sign in Github</button>

    </form>

    </div>
  )
}

export default Login