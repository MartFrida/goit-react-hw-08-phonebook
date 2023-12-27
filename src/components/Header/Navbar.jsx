import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div className='text-white font-bold flex gap-4'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/phonebook'>Phonebook</NavLink>
      {!isLoggedIn && (<>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>SignUp</NavLink>
      </>)}
      {isLoggedIn && (
        <>
          |<button>Exit</button>
        </>
      )}

    </div>
  )
}

export default Navbar