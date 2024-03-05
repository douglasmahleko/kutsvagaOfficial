import React, { useState } from 'react'
import Box from '@mui/material/Box';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import Grid from '@mui/material/Grid';

function App({children}) {
  const [title, setTitle] = useState(null)
  return (
    <Grid container>
      <Box item >
        <NavBar />
        <SideBar />
      </Box>
      <Box sx={{marginLeft:"20%"}}>
        <div >
          {children}
        </div>
      </Box>
    </Grid>
  );
}

export default App;
