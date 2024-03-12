import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicCard from "./constants/basicCard";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "./constants/commonButton";
import { useNavigate } from 'react-router-dom';

function Home({ setuserLogged}){
  const [data, setData] = useState([])
  const [privateKey, setPrivateKey] = useState('')
  const navigate = useNavigate();
  const [title, settitle] = useState('');
  
    const getContent = () => {
        return(
        <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
            <form style={{ margin: '1%' }}>
                <Stack>
                <TextField sx={{ width:'90%', margin:'1%'}} required error={privateKey.length===0} variant="outlined" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} label="Private Key" />
                <CommonButton onClick={LogIn} sx={{ width:'90%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'30%', justifyContent:"center"}}>
              <Typography variant="h3" color="purple"> LogIn </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%'}}></Typography>
              <Typography color='error' variant="h6" sx={{justifyContent:"center"}}> {title} </Typography>
          </Box>
        )
      }
      const getHeadForRegistration = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              <Typography variant="h3" color="purple"> Are You Registeed? </Typography>
              <Typography variant="h2" color="purple" sx={{borderBottom:'2px solid black',width:'90%'}}></Typography>
          </Box>
        )
      }
      const getContentForRegistration = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              <Typography variant="h4" sx={{ fontFamily:"Arial Narrow" }}> Register as a <Link to="addClient">Client</Link> </Typography>
              <Typography variant="h4" sx={{ fontFamily:"Arial Narrow" }}>Register as an <Link to="addAgent">Agent</Link></Typography>
              <Typography variant="h6" sx={{ fontFamily:"Arial Narrow" }}></Typography>
          </Box>
        )
      }
      useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
      const LogIn = () => { 
        console.log("click")
          data.forEach((user) => {
              if(privateKey === user.email ){
                console.log("click2")
                  if(user.registered){
                    console.log("click3")
                    user.loggedIn=true
                    setuserLogged(user)
                    navigate('showHouses', {state : {
                      user : user
                    }})
              }else{
                    settitle("Your registration has expired ")
                  }
              }else{
                  settitle("private Key unknown or you have not yet registered")
              }
            }
          )
      }
      const showHome = () => {
        return(
          <Box>
                  <Typography variant="h2" sx={{ fontFamily:"Times New Ramons", width:"1000px",  }}> Welcome To Kutsvaga</Typography>
                  <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'80%'}}></Typography>
                  <Box sx={{ width:'25%', flexDirection : 'row', position:'sticky' }}>
                    
                    <BasicCard header={getHead()} content={getContent()} sx={{ flexDirection : 'row', position:'fixed', width:"600px", marginLeft:"100px", top:"210px" }} />
                    <BasicCard header={getHeadForRegistration()} content={getContentForRegistration()} sx={{ flexDirection : 'row', position:'absolute', width:"600px", marginLeft:"-100px", top:"30px" }} />
                  </Box>
                  </Box>
        )
      }
    return(
        <div>
          {data && showHome() }
        </div>
    )
}
export default Home
