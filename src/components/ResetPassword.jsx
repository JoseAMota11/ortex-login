import { AiOutlineMail } from "react-icons/ai";
import { useAuth } from "../context/authContext";
import './ResetPassword.css'
import { useState, useEffect } from 'react';
import { MessageError } from "./MessageError";
import { Link, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {

  useEffect(() => {
    document.title = "Reset Password"
  }, [])

  const { resetPassword } = useAuth()

  const [user, setUser] = useState({
    email: ""
  })

  const navigate = useNavigate()

  const [ error, setError ] = useState()

  const handleChange = ({ target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleResetPassword = async () => {
    if (user.email) {
      try {
        await resetPassword(user.email)
        navigate("/login")
      } catch (error) {
        setError(error)
      }
    }
  }

  return (
    <div className="reset-password-container">
      <div className="second-container">
        <h1>Reset Password</h1>
        <h3>Enter your email address to get reset instructions sent to you. Don't forget to check you spam box.</h3>
        <form onSubmit={handleResetPassword}>
          <div className="third-container">
          <AiOutlineMail fontSize="25px" />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          </div>
          <button 
            className="btn-reset"
          >
            Submit
          </button>
        </form>
        <Link to="/login" className="forgot-option">
          Back to the login page
        </Link>
        {error && <MessageError message={error} />}
      </div>
    </div>
  )
}
