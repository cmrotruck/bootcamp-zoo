import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Image } from "semantic-ui-react";
import Logo from "../../images/logo/zoologo.jpg";

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <Image className="cardImage" src={Logo} alt="screenshot" size="small" />
        </Link>

        <nav className="text-center">
          <Link to="/about">About</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/contact">Contact Us</Link>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
