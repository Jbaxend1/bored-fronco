import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import myLogo from '../../../src/img/newLogo.png';
import NavBar from '../NavBar/NavBar';
import Avatar from '@mui/material/Avatar';




function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className='nav-menu'>
        <Avatar variant="circular" src={user.profile_pic} sx={{ width: 85, height: 85,  marginRight: 3, marginLeft: 3 }} />
        <h2 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>Welcome, {user.username}!</h2>
        <NavBar user={user} />
      </div>
      <div className='nav-logo'>
        <Link to="/home">
          <h1 aria-label="Page Title - Bored Fronco" className="nav-title">Bored Fronco</h1>
          <img src={myLogo} alt='Bored Fronco Logo' width={250} height={150} />
        </Link>
      </div>




    </div>
  );
}

export default Nav;
