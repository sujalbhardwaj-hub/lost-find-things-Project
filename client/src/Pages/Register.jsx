import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-card">

          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>

            <div className="auth-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                required
              />
            </div>

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
                  placeholder="Create Password"
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
              Register
            </button>

          </form>

          <div className="auth-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Register;