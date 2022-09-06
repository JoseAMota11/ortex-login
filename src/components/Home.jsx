import React from 'react'
import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'

export const Home = () => {

  const { user } = useAuth()

  return (
    <>
      <div>Home</div>
      <Link to='/'>
        Back to Home
      </Link>
    </>
  )
}
