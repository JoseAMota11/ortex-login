import { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import Logo from '../assets/ortex-logo-h.webp'
import { Link } from 'react-router-dom';
import './Home.css'

export const Home = () => {

  const { user, logout } = useAuth()

  const [price, setPrice] = useState()
  const [timestamp, setTimestamp] = useState()

  function getTime(timestamp) {
    let date = new Date(timestamp)
    return date.toLocaleTimeString("default")
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    document.title = "Home"
  }, [])

  useEffect(() => {
    const ws = new WebSocket("ws://stream.tradingeconomics.com/?client=guest:guest")
    ws.onopen = function() {
    ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}')
    }
    ws.onmessage = event => {
      const currentData = JSON.parse(event.data)
      setPrice(currentData.price)
      setTimestamp(currentData.dt)
    }
    return () => ws.close()
  }, [])

  return (
    <>
      <header>
        <nav>
          <Link to='/home'>
            <img 
              src={Logo} 
              alt="ORTEX logo." 
              className='ortex-logo'
            />
          </Link>
          <Link to='/login'>
            <button className='btn-logout' onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </nav>
      </header>
      <main className='welcome-container'>
        <h1 className='home-title'>Welcome {user.displayName}</h1>
        <div className="web-socket-container">
          <div className="price-container">
            <h3>Price</h3>
            <span>$USD{price}</span>
          </div>
          <div className="timestamp-container">
            <h3>Timestamp</h3>
            <span>{getTime(timestamp)}</span>
          </div>
        </div>
      </main>
    </>
  )
}
