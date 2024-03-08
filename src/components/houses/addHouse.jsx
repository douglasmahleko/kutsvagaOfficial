import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";

function AddHouse({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [city, setCity] = useState('')
    const [town, setTown] = useState('')
    const [agent, setAgent] = useState('')
    const [phase, setPhase] = useState('')
    const [roomsAvailable, setRoomsAvailable] = useState('')
    const [conditions, setConditions] = useState('')
    const [rules, setRules] = useState('')
    const [amountPerRoom, setAmountPerRoom] = useState('')
    const [utilities, setUtilities] = useState('')
    const [requirements, setRequirements] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            city: city,
            town: town,
            agent: agent,
            phase: phase,
            roomsAvailable: roomsAvailable,
            conditions: conditions,
            rules: rules,
            amountPerRoom: amountPerRoom,
            requirements: requirements,
            utilities: utilities
          };
          await backendActor.addCarAndDriver(message);
          setCity("");
          setTown("");
          setAgent("");
          setPhase("");
          setRoomsAvailable("");
          setConditions("");
          setRules("");
          setAmountPerRoom("");
          setRequirements("")
          setUtilities("")
          setSending(true);
          navigate('/showCarAndDriver');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'50%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={city.length===0} variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} label="City eg. Harare" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={town.length===0} variant="outlined" value={town} onChange={(e) => setTown(e.target.value)} label="Town eg. Chitungwiza" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={phase.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={phase} onChange={(e) => setPhase(e.target.value)} label="Phase / Town eg. Sele 1 and 2" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={roomsAvailable.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={roomsAvailable} onChange={(e) => setRoomsAvailable(e.target.value)} label="Rooms Available " />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={conditions.length===0} variant="outlined" value={conditions} onChange={(e) => setConditions(e.target.value)} label="Conditions eg. no fsmily of more than 5" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={rules.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={rules} onChange={(e) => setRules(e.target.value)} label="Rules eg. late nights" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={amountPerRoom.length===0} variant="outlined" value={amountPerRoom} onChange={(e) => setAmountPerRoom(e.target.value)} label="Amount Per Room" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={utilities.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={utilities} onChange={(e) => setUtilities(e.target.value)} label="Utilities eg. electricity" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={requirements.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={requirements} onChange={(e) => setRequirements(e.target.value)} label="Requirements eg. pay rent early" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              
              <Typography variant="h2"> Add House </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'20%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} sx={{ width : "800px"}} />
    )
}
export default AddHouse