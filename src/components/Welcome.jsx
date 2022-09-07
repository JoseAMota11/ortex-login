import { Link } from "react-router-dom";
import Logo from "../assets/ortex-logo-h.webp";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { useLoadingState } from "../context/authContext";
import { TailSpin } from 'react-loader-spinner';

export const Welcome = () => {

  const navigation = useNavigate();

  const { loading, setLoading } = useLoadingState();

  const navigateTo = (route) => {
    try {
      setLoading(true);
      navigation(route);
    } catch (error) {
      console.error(error.message);
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
        <>
          <header>
            <nav>
              <Link to="/">
                <img src={Logo} alt="ORTEX logo." className="ortex-logo" />
              </Link>
              <div className="login-register-container">
                <button
                  className="btn-login"
                  onClick={() => navigateTo("/login")}
                >
                  Login
                </button>
                <button
                  className="btn-login"
                  onClick={() => navigateTo("/register")}
                >
                  Register
                </button>
              </div>
            </nav>
          </header>
          <main className="welcome-container">
            <h1 className="title">Welcome to ORTEX</h1>
            <p className="paragraph">
              ORTEX brings you the most timely and accurate Short interest data
              available. ORTEX short interest data is sourced from the worlds
              largest combined pool of agent lenders, prime brokers, and
              broker-dealers who submit their inventory. ORTEX provides intra
              day and historical data for days to cover, shares on loan,
              utilization rate, cost of borrow and free float on loan. ORTEX
              also provide all relevant US exchange data and relevant
              institutional short holdings flags so users can access all the
              information available in one place.
            </p>
          </main>
        </>
      )}
    </>
  );
};
