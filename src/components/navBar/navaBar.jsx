import * as React from 'react';
import { NavBarLists } from '../constants/navBarLists';
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { Notifications } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { makeStyles } from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return{
        page:{
            width:"100%",
            background:"#99C0F4",
            fontFamily: 'Arial Narrow',
            padding: theme.spacing(3)
        },
        drawer:{
            width:drawerWidth,
            fontFamily: 'Arial Narrow',
        },
        drawerPaper:{
            width:drawerWidth,
            fontFamily: 'Arial Narrow',
        },
        root:{
            display:"flex",
            fontFamily: 'Arial Narrow',
        },
        active:{
            backgroundColor:"#9FD0F7",
            color:"#862020",
            fontFamily: 'Arial Narrow',
        },
        title:{
            padding: theme.spacing(2),
            fontFamily: 'Arial Narrow',
        },
        appBar:{
            width : `calc(100% - ${drawerWidth}px)`,
            fontFamily: 'Arial Narrow',
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1,
            fontFamily: 'Arial Narrow',
        },
        avatar:{
            marginLeft:10,
            fontFamily: 'Arial Narrow',
        }
    }
})

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:'center'
}))
const Icons = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"20px",
  alignItems:'center'
}))
export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Icons>
                    <Tooltip title="Notification">
                        <Badge badgeContent={4} color="error">
                            <Notifications  />
                        </Badge>
                    </Tooltip>
                    
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Avatar sx={{width:30, height:30}} src={require("./dougy.jpg")} />
                        
                    </UserBox>
            </Icons>
          </Typography>
          <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                >
                <Typography p={3} color='#9c9797' variant="span">Douglas</Typography>
                
                {NavBarLists.slice(9).map((item) => (
              <MenuItem key={item.id} onClick={() => navigate(item.route)} >
                {item.label}
              </MenuItem>
            ))}<MenuItem >Logout</MenuItem>
            </Menu>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NavBarLists.slice(3, 6).map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.route)} >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}