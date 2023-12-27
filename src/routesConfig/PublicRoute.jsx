import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors'

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const location = useLocation()
  console.log(location)
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }
  return children
}
