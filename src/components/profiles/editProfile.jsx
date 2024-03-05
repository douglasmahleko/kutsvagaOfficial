import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from '../constants/basicCard';

function EditProfile({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [hr, setHR] = useState('')
    const [punishment, setPunishment] = useState('')
    const [judgement, setJudgement] = useState('')
    const [offense, setOffense] = useState('')
    const [driver, setDriver] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            hr: hr,
            punishment: punishment,
            judgement: judgement,
            offense: parseInt(offense),
            driver: driver
          };
          await backendActor.addDriverAndHr(message);
          setHR("");
          setPunishment("");
          setJudgement("");
          setOffense();
          setDriver("");
          setSending(true);
          navigate('/showDriverAndHR');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={hr.length===0} variant="outlined" value={hr} onChange={(e) => setHR(e.target.value)} label="HR Officer Name" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={punishment.length===0} variant="outlined" value={punishment} onChange={(e) => setPunishment(e.target.value)} label="Punishment" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={judgement.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={judgement} onChange={(e) => setJudgement(e.target.value)} label="Judgement" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={offense.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={offense} onChange={(e) => setOffense(e.target.value)} label="Offense" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={driver.length===0} variant="outlined" value={driver} onChange={(e) => setDriver(e.target.value)} label="Driver" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'30%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'45%',}}></Typography>
              <Typography variant="h2"> File HR Hearings</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'45%'}}></Typography>
          </Box>
        )
      }
    return(
        <BasicCard header={getHead()} content={getContent()} />
    )
}
export default EditProfile