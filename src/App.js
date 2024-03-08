import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import Grid from '@mui/material/Grid';
import './components/navBar/navBar.css'
import HomeNav from './components/navBar/homeNav';
import { useNavigate, useLocation } from "react-router-dom";

function App({children, user}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(null)
  useEffect(() => (
    console.log("changed")
  ), [user.loggedIn])
  const LogOut = () => {
    user.loggedIn=false
    navigate('/')
  }
  return (
    <Grid container>
        <Box >
          <Box item >
              <Box className={ user.loggedIn ? "show" : "hide"}>
                <NavBar user={user} LogOut={LogOut} />
                <SideBar user={user} />
              </Box>
              <Box className={ user.loggedIn ? "hide" : "show"} >
                <HomeNav />
              </Box>
          </Box>
          <Box sx={{marginLeft:"20%"}}>
            <div >
              {children}
            </div>  
          </Box>
      </Box>
    </Grid>
  );
}

export default App;
