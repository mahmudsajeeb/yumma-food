 import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
  function Navbar() {
    
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut =() =>{
      logOut()
      .then()
      .catch(error =>console.log(error.message))
    }
   return (

    
     <>
         <div className="my-container navbar bg-base-100">
        <div className="navbar-start">
           
          <Link to='/' className="btn btn-ghost normal-case text-xl">Yumma</Link>
        </div>
        <div className="navbar-center   lg:flex">
          <ul className=" m-6 flex px-1">
            <li> 
            {/* <NavLink
              to='/'
              aria-label='home'
              title='home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink> */}

            <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "actives"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'actives' : 'default')}
            >
              Blog
            </NavLink>
            </li>
          
            

          </ul>
        </div>
        <div className="navbar-end">
        
          {/* {user ? <button className="btn"> Logout</button> :
          <Link to='/login'>
          <button className="btn"> Login</button>
          </Link>} */}
          { user?<button onClick={handleLogOut} className='btn'><Link to='/login'>  Logout 
          </Link> </button>:<button className='btn'><Link to='/login'>Login 
          </Link></button>}
        </div>
        <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {user &&  <img src={user.photoURL} />}
        </div>
      </label>
        </div>
      </div>
     </>
   )
 }
 
 export default Navbar