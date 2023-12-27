import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[80vh]'>
      <h1>
        Page is not found.
      </h1>

      <Link to='/'>Go to homepage!</Link>
    </div>
  )
}

export default Page404