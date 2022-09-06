import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { BsGoogle, BsApple } from "react-icons/bs";
import "./Login.css";

export const Login = () => {
  useEffect(() => {
    (() => {
      document.title = "Login";
    })();
  }, []);

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="title-login">Login to Your Account</h1>
        <h3 className="subtitle-login">Make smarter trades with ORTEX</h3>
        <div className="btn-container">
          <button className="login-google">
            <BsGoogle fontSize="20px" />
            Login With Google
          </button>
          <button className="login-apple">
            <BsApple fontSize="20px" />
            Login With Apple
          </button>
        </div>
        <div className="or-label__container">
          <div className="line"></div>
          <span className="or-label">OR</span>
          <div className="line"></div>
        </div>
        <form method="post">
          <div className="field-container">
            <AiOutlineMail fontSize="25px" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="field-container">
            <MdPassword fontSize="25px" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="more-options">
            <label htmlFor="remember" className="label-container">
              <input type="checkbox" id="remember" />
              <div class="checkmark"></div>
              <span>Remember Me</span>
            </label>
            <Link to="/" className="forgot-option">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="btn-login-2">
            Login to Your Account
          </button>
        </form>
        <div className="member">
          Not a member yet?
          <Link to="/register" className="register">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
