import { Link } from 'react-router-dom'
import Logo from '../assets/ortex-logo-h.webp'
import './Welcome.css'

export const Welcome = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>
            <img 
              src={Logo} 
              alt="ORTEX logo." 
              className='ortex-logo'
            />
          </Link>
          <Link to='/login'>
            <button className='btn-login'>
              Login
            </button>
          </Link>
        </nav>
      </header>
      <main className='welcome-container'>
        <h1 className='title'>Welcome to ORTEX</h1>
        <p className='paragraph'>ORTEX brings you the most timely and accurate Short interest data available. ORTEX short interest data is sourced from the worlds largest combined pool of agent lenders, prime brokers, and broker-dealers who submit their inventory. ORTEX provides intra day and historical data for days to cover, shares on loan, utilization rate, cost of borrow and free float on loan. ORTEX also provide all relevant US exchange data and relevant institutional short holdings flags so users can access all the information available in one place.</p>
      </main>
    </>
  )
}
