import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Avatar, Divider, Chip } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>
        <Avatar variant="circular" src={user.profile_pic} sx={{ width: 135, height: 135,marginBottom: 3 }} />
      </div>
      <LogOutButton className="btn" />
      <Divider variant="middle" >
        <Chip label="Your Bronco" variant="contained" sx={{ color: "black", backgroundColor: 'whitesmoke', fontSize: '18px' }} />
      </Divider>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
