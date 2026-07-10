import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-card">

          <h2>Student Login</h2>

          <form onSubmit={handleSubmit}>

            <div className="auth-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="auth-group">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            <button className="auth-btn">
              Login
            </button>

          </form>

          <div className="auth-link">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Login;