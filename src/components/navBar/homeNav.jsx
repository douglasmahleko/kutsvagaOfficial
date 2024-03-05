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
            background:"#f9f9f9",
            padding: theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:"flex"
        },
        active:{
            backgroundColor:"#f4f4f4",
            color:"#862020"
        },
        title:{
            padding: theme.spacing(2)
        },
        appBar:{
            width : `calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:10
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
export default function HomeNav() {
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
                    
            </Icons>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NavBarLists.slice(0, 3).map((item) => (
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