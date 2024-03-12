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
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IconButton } from '@material-ui/core';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import './navBar.css'

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
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function NavBar({user, LogOut}) {
  const location = useLocation()
  const navigate = useNavigate()
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
    const page = parsedTitle.toLocaleUpperCase()
  const [open, setOpen] = useState(false)
  let both = []
  NavBarLists.slice(3, 6).forEach(item => {          
    console.log( 'user outside if' ,item.level)
  })
  // console.log(both)
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={darkTheme}>
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
              {/* <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"100px", top:"20px" }}>
                {page}
              </Typography> */}
              <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"330px", top:"20px" }}> 
                (DOLLARS) - <IconButton color="inherit" size="small"> <CurrencyExchangeIcon /> </IconButton> - {user.amountInDolls}
              </Typography>
              <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"530px", top:"20px" }}>
              (ICP) - <IconButton color="inherit" size="small"> <CurrencyBitcoinIcon /> </IconButton> - {user.amountInICP}
              </Typography>
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
                <Typography p={3} color='#9c9797' variant="span">{user.name}</Typography>
                
                {NavBarLists.slice(10).map((item) => (
              <MenuItem key={item.id} onClick={() => navigate(item.route)} >
                {item.label}
              </MenuItem>
            ))}
              <Button sx={{ padding:'2', width:'100%' }} variant='outline' onClick={() => LogOut()} >
                LogOut
              </Button>
            </Menu>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NavBarLists.slice(3, 6).map((item) => (
                <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.route)} >
                  {item.label} 
                </Button>
            ))}
              <Button sx={{ color: '#fff' }} onClick={() => LogOut()} >
                LogOut
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      </ThemeProvider>
    </Box>
  );
}