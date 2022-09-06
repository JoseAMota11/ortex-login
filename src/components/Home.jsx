import React from 'react'
import { useAuth } from '../context/authContext'

export const Home = () => {

  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
      <div>Home</div>
        <button onClick={handleLogout}>
          Logout
        </button>
    </>
  )
}
