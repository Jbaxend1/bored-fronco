import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ConstructionIcon from '@mui/icons-material/Construction';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { minWidth } from '@mui/system';


function NavBar({ user }) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const history = useHistory();

    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            onClick: () => history.push("/home")
        },
        {
            text: "Modifications",
            icon: <SettingsSuggestIcon />,
            onClick: () => history.push("/modifications")
        },
        {
            text: "Maintenance",
            icon: <ConstructionIcon />,
            onClick: () => history.push("/maintenance")
        },
        {
            text: "About",
            icon: <InfoIcon />,
            onClick: () => history.push("/about")
        },
    ]

    return (
        <>
            <IconButton sx={{ minWidth: 85, marginLeft: '25px'}} role={'menu'} aria-label="Navigation Menu" onClick={() => setDrawerOpen(true)}>
                <MenuIcon fontSize='large' sx={{ color: 'white'}}/>
            </IconButton>
            <Drawer
                sx={{ }}
                anchor='left'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        elevation: "14",
                        backgroundColor: "#525456"
                    }
                }}
            >
                <Box
                    sx={{ width: 300, textAlign: 'center'}}
                    role='presentation'
                    onClick={() => setDrawerOpen(false)}
                    onKeyDown={() => setDrawerOpen(false)}
                >
                    <Typography variant='h4' color={'white'} padding={'12px'}>
                        Menu
                    </Typography>
                    <Divider sx={{ backgroundColor: 'white', marginTop: 3}}/>
                    <List
                        sx={{
                            // selected and (selected + hover) states
                            '&& .Mui-selected, && .Mui-selected:hover': {
                                bgcolor: 'red',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'pink',
                                },
                            },
                            // hover states
                            '& .MuiListItemButton-root:hover': {
                                bgcolor: '#f3be2d',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#525456',
                                },
                            },
                        }}
                    >
                        {itemsList.map((item, index) => {
                            const { text, icon, onClick } = item;
                            return (
                                <ListItem key={text} onClick={onClick} >
                                    <ListItemText sx={{ color: 'white'}} primary={text} />
                                    <ListItemButton sx={{  display: 'flex', justifyContent: 'flex-end', maxWidth: 90}}>
                                        {icon && <ListItemIcon sx={{ color: 'white'}}>{icon}</ListItemIcon>}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>

            </Drawer>
        </>
    )
};

export default NavBar;