import { useContext } from "react";
import { useState } from "react"; 
import { Link } from "react-router-dom";
 


function Register() {
//   const [error, setError] = useState('')
//   const [success, setSuccess] = useState('')
//   const [accept, setAccept] = useState(false)
//   console.log(accept)

//   const {createUser, verifyEmail } = useContext(AuthContext)
  
//   const handleSignup = (e) => {
//       e.preventDefault()
//       setError('')
//       setSuccess('')
//       const form = e.target;
//       const email = form.email.value;
//       const confirm = form.confirm.value;
//       const password = form.password.value;
      
//       if(password.length < 6){
//           setError('At least 6 characters')
//           return
//       }
//       else if(!(password === confirm)){
//           setError('Password did not match')
//           return
//       }

//       createUser(email, password)
//       .then(userDetails => {
//           verifyEmail(userDetails.user)
//           setSuccess(`A verification mail sent to ${userDetails.user.email}`)
//       })
//       .catch(error => {
//           console.log(error.message)
//           setError(error.message)
//       })
//   }

//   const handleAccept = (event) => {
//       const clicked = event.target.checked
//       setAccept(clicked)
//   }
  
  return (
    <div>
              <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
          Photo URL
        </label>
        <input
          type="text"
          id="photo"
          placeholder="Enter your photo URL"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
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
      
      <div className="flex items-center justify-center">
        <button
          className="btn w-full btn-outline btn-error"
        >
          Register
        </button>
      </div>
      <p className="inline-block align-baseline font-bold text-sm  " >
          Already have an account?<Link to='/login'>Register</Link>
        </p>
        
    </form>
    
    </div>
  )
}

export default Register