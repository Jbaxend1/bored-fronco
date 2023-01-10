import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import myLogo from '../../../src/img/newLogo.png';
import NavBar from '../NavBar/NavBar';



function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      

      <Link to="/home">
        <h1 aria-label="Page Title - Bored Fronco" className="nav-title">Bored Fronco</h1>
        <img src={myLogo} alt='Bored Fronco Logo' width={250} height={150} />
      </Link>

      <NavBar user={user}/>

      <div>
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

        <LogOutButton />
        
      </div>
    </div>
  );
}

export default Nav;
