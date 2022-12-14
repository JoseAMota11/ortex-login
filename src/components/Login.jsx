import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useAuth, useLoadingState } from "../context/authContext";
import { MessageError } from "./MessageError";
import { TailSpin } from "react-loader-spinner";
import "./Login.css";

export const Login = () => {
  useEffect(() => {
    (() => {
      document.title = "Login";
    })();
  }, []);

  // Save users.
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Manage error.
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const {loading, setLoading} = useLoadingState();

  const navigation = useNavigate();
  const { login, loginWithGoogle, loginWithGitHub } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true)
    try {
      await login(user.email, user.password);
      navigation("/home");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true)
    try {
      await loginWithGoogle();
      navigation("/home");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  };

  const handleGitHubLogin = async () => {
    setError("");
    setLoading(true)
    try {
      await loginWithGitHub();
      navigation("/home");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <TailSpin 
            height="80"
            width="80"
            color="#31aba6"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="container">
          <div className="login-container">
            <h1 className="title-login">Login to Your Account</h1>
            <h3 className="subtitle-login">Make smarter trades with ORTEX</h3>
            <div className="btn-container">
              <button className="login-google" onClick={handleGoogleLogin}>
                <BsGoogle fontSize="20px" />
                Login With Google
              </button>
              <button className="login-apple" onClick={handleGitHubLogin}>
                <BsGithub fontSize="20px" />
                Login With GitHub
              </button>
            </div>
            <div className="or-label__container">
              <div className="line"></div>
              <span className="or-label">OR</span>
              <div className="line"></div>
            </div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="field-container">
                <AiOutlineMail fontSize="25px" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  style={{
                    outline:
                      error?.code === "auth/user-not-found"
                        ? "2px solid #d44"
                        : "",
                  }}
                  required
                />
              </div>
              <div className="field-container">
                <MdPassword fontSize="25px" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  style={{
                    outline:
                      error?.code === "auth/wrong-password"
                        ? "2px solid #d44"
                        : "",
                  }}
                  required
                />
              </div>
              <div className="more-options">
                <label htmlFor="remember" className="label-container">
                  <input type="checkbox" id="remember" />
                  <div className="checkmark"></div>
                  <span>Remember Me</span>
                </label>
                <Link to="/reset-password" className="forgot-option">
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
            {error && <MessageError message={error} />}
          </div>
        </div>
      )}
    </>
  );
};
