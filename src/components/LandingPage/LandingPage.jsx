import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Avatar from '@mui/material/Avatar';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome, to Bored Fronco');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <img src={"/public/images/logo.png"} width='200' height={'200'} alt='Bored Fronco Logo' />

      <h2>{heading}</h2>
      <p>A place where Bronco enthusiasts can come together to track and share their modifications and ownership journey.</p>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <img src='https://images.unsplash.com/photo-1641755894668-04516e1ee69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80' />
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
