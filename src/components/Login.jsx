import React from 'react'
import { Input } from 'daisyui';
import { Link } from 'react-router-dom';

function Login() {
  return (
    // <div>
    //     <form className="max-w-md mx-auto"  >
    //   <div className="grid gap-4">
    //     <div>
    //       <label className="text-gray-700">Email</label>
    //       <Input
    //         type="email"
            
             
    //         placeholder="Enter your email"
    //       />
    //     </div>
    //     <div>
    //       <label className="text-gray-700">Password</label>
    //       <Input
    //         type="password"
             
    //         placeholder="Enter your password"
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary w-full">
    //       Login
    //     </button>
    //   </div>
    // </form>
    // </div>
    <div>
    <h1 className='text-center text-4xl'>Please Login</h1>
      
      <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          Don't Have Account?<Link to='/register'>Login</Link>
        </p>
    </form>
    </div>
  )
}

export default Login