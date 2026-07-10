import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎒 Lost & Found
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lost">Report Lost</Link></li>
        <li><Link to="/found">Report Found</Link></li>
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><linl to="/dashboard">Dashboard</linl></li>
      </ul>
    </nav>
  );
}

export default Navbar;