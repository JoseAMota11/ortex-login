import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useAuth, useLoadingState } from "../context/authContext";
import "./Register.css";
import { MessageError } from "./MessageError";
import { TailSpin } from 'react-loader-spinner'

export const Register = () => {
  useEffect(() => {
    (() => {
      document.title = "Register";
    })();
  }, []);

  // Save users.
  const [user, setUser] = useState({
    username: "",
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

  const navigation = useNavigate();
  const { signUp, loginWithGoogle, loginWithGitHub } = useAuth();

  const { loading, setLoading} = useLoadingState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true)
    try {
      await signUp(user.email, user.password, user.username);
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
            <h1 className="title-login">Create an Account</h1>
            <h3 className="subtitle-login">
              Get started with your free account
            </h3>
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
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="field-container">
                <AiOutlineUser fontSize="25px" />
                <input
                  type="text"
                  placeholder="Full Name"
                  name="username"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="field-container">
                <AiOutlineMail fontSize="25px" />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  style={{
                    outline:
                      error?.code === "auth/invalid-email"
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
                  style={{
                    outline:
                      error?.code === "auth/weak-password"
                        ? "2px solid #d44"
                        : "",
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn-login-2">
                Register
              </button>
            </form>
            <div className="member">
              Already have an account?
              <Link to="/login" className="register">
                Login
              </Link>
            </div>
            {error && <MessageError message={error} />}
          </div>
        </div>
      )}
    </>
  );
};
