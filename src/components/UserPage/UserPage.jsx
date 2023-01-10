import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Avatar, Divider, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const handleClick = () => {
    history.push('/add-vehicle');
  }

  return (
    <div className="container">
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
        <div>
          
        </div>
        <div>
          <Typography variant='h3' sx={{ paddingLeft: 12 }}>Let's get started by adding a pony to your stable!</Typography>
        </div>
      </div>
      <div style={{ paddingBottom: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card className="card" elevation={15} sx={{ backgroundColor: 'rgb(222, 222, 222)', borderRadius: '67px' }}>
          <CardActionArea onClick={handleClick}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="500"
                sx={{ minHeight: 650 }}
                image="https://images.unsplash.com/photo-1653367963903-ba0d38d3843c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
              />
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: 'white',
              padding: '25px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <AddIcon fontSize='large' sx={{ paddingRight: '12px' }} />
              <Typography variant='h5'>Add Your Bronco...</Typography>
            </Box>
          </CardActionArea>
        </Card>
      </div>
      <LogOutButton className="btn" />
      <Divider variant="middle" >
        <Chip label="Your Stable" variant="contained" sx={{ color: "black", backgroundColor: 'whitesmoke', fontSize: '18px' }} />
      </Divider>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
