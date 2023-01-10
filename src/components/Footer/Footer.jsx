import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import '../Nav/Nav.css';
import { useSelector } from 'react-redux';
import myLogo from '../../../src/img/newLogo.png';
import NavBar from '../NavBar/NavBar';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className='container'>
      <div class="footer-content" style={{ display: 'flex', justifyContent: 'center'}}>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

        <LogOutButton className="navLink" />

      </div>
      <div className='footer-logo'>
      <footer>&copy; JMBaxendell</footer>
      </div>
      </div>
      

    </>
  )

}

export default Footer;
