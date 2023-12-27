import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white font-bold flex gap-4'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/phonebook'>Phonebook</NavLink>
      <NavLink to='/register'>SignUp</NavLink>
    </div>
  )
}

export default Navbar