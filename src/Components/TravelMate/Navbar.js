import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import  "./Navbar.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Travel<span>Explorer</span>
      </div>

      {/* Desktop Menu */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/activity">Activity</Link>
      </div>

      {/* Desktop Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="login">
          Sign In
        </Link>

        <Link to="/signup" className="signup">
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={showDropdown}>
        {dropdown ? <MdClose /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Dropdown */}
      {dropdown && (
        <div className="mobile-menu">

          <Link to="/" onClick={showDropdown}>
            Home
          </Link>

          <Link to="/explore" onClick={showDropdown}>
            Explore
          </Link>

          <Link to="/tickets" onClick={showDropdown}>
            Tickets
          </Link>

          <Link to="/activity" onClick={showDropdown}>
            Activity
          </Link>

          <Link to="/login" onClick={showDropdown}>
            Sign In
          </Link>

          <Link to="/signup" onClick={showDropdown}>
            Sign Up
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;