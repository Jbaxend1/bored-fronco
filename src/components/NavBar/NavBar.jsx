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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
            <IconButton size='large' onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    sx={{ width: 250, textAlign: 'center' }}
                    role='presentation'
                    onClick={() => setDrawerOpen(false)}
                    onKeyDown={() => setDrawerOpen(false)}
                >
                    <Typography variant='h6'>
                        Menu
                    </Typography>
                    <Divider />
                    <List>
                        {itemsList.map((item, index) => {
                            const { text, icon, onClick } = item;
                            return (
                                <ListItem key={text} onClick={onClick}>
                                    <ListItemText primary={text} />
                                    <ListItemButton>
                                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
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