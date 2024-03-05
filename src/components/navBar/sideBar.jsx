import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from './styles';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate, useLocation } from "react-router-dom";
import { NavBarLists } from '../constants/navBarLists';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function SideBar(){
    const navigate = useNavigate()
    const location = useLocation()
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
    return(
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {NavBarLists.slice(6, 9).map((text, index) => (
            <ListItem key={text.id} >
              <ListItemButton onClick={() => navigate(text.route)} >
                <ListItemIcon sx={navbarStyles.icons}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} sx={navbarStyles.text } />
                </ListItemButton>
            </ListItem>
          ))}
          <ListItem key='11'>
              <ListItemButton onClick={() => console.log('darkMOde')} >
                <ListItemIcon sx={navbarStyles.icons}>
                  <NightsStayIcon />
                </ListItemIcon>
                  <Switch

                  />
                </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
    )
}export default SideBar