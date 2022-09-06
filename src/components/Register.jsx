import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import { BsGoogle, BsApple } from 'react-icons/bs'
import { useAuth } from '../context/authContext';
import './Register.css'
import { Message } from './Message';
// import { async } from '@firebase/util';

export const Register = () => {

  useEffect(() => {
    (() => {
      document.title = "Register"
    })()
  }, [])

  // Save users.
  const [ user, setUser ] = useState({
    username: "",
    email: "",
    password: ""
  })

  // Manage error.
  const [ error, setError ] = useState()

  const handleChange = ({ target: { name, value }}) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const navigation = useNavigate()
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(user.email, user.password)
      navigation("/home")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='container'>
      {error && <Message message={error} />}
      <div className='login-container'>
        <h1 className='title-login'>Create an Account</h1>
        <h3 className='subtitle-login'>Get started with your free account</h3>
        <div className='btn-container'>
          <button className='login-google'>
            <BsGoogle fontSize='20px' />
            Login With Google
          </button>
          <button className='login-apple'>
            <BsApple fontSize='20px' />
            Login With Apple
          </button>
        </div>
        <div className='or-label__container'>
          <div className='line'></div>
          <span className='or-label'>OR</span>
          <div className='line'></div>
        </div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className='field-container'>
            <AiOutlineUser fontSize='25px' />
            <input 
              type="text" 
              placeholder='Full Name'
              name='username'
              onChange={handleChange}
            />
          </div>
          <div className='field-container'>
            <AiOutlineMail fontSize='25px' />
            <input 
              type="email" 
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='field-container'>
            <MdPassword fontSize='25px' />
            <input 
              type="password" 
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn-login-2'>
            Register
          </button>
        </form>
        <div className='member'>
          Already have an account? 
          <Link to='/login' className='register'>Login</Link>
        </div>
      </div>
    </div>  
  )
}
