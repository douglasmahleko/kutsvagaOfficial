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
    const [email, setEmail] = useState('')
    const [initialOdometerOnStartingJourney, setInitialOdometerOnStartingJourney] = useState('')
    const [destination, setDestination] = useState('')
    const [plateNo, setPlateNo] = useState('')
    const [finalOdometerOnFinishingJourney, setFinalOdometerOnFinishingJourney] = useState('')
    const [dateAndTime, setDateAndTime] = useState('')
    const [comments, setComments] = useState('')
    const [purpose, setPurpose] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            destination: destination,
            initialOdometerOnStartingJourney: parseFloat(initialOdometerOnStartingJourney),
            email: email,
            plateNo: plateNo,
            purpose: purpose,
            comments: comments,
            dateAndTime: dateAndTime,
            finalOdometerOnFinishingJourney: parseFloat(finalOdometerOnFinishingJourney),
          };
          await backendActor.addCarAndDriver(message);
          setEmail("");
          setInitialOdometerOnStartingJourney("");
          setDestination("");
          setPlateNo("");
          setFinalOdometerOnFinishingJourney("");
          setDateAndTime("");
          setComments("");
          setPurpose("");
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
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Driver Name" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={initialOdometerOnStartingJourney.length===0} variant="outlined" value={initialOdometerOnStartingJourney} onChange={(e) => setInitialOdometerOnStartingJourney(e.target.value)} label="Initial Odometer On Starting Journey" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={finalOdometerOnFinishingJourney.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={finalOdometerOnFinishingJourney} onChange={(e) => setFinalOdometerOnFinishingJourney(e.target.value)} label="Final Odometer On Finishing Journey" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={destination.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={destination} onChange={(e) => setDestination(e.target.value)} label="Destination" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="The Car" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={dateAndTime.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={dateAndTime} onChange={(e) => setDateAndTime(e.target.value)} label="Date And Time" /> */}
                <DatingBar title="Date And Time" value={dateAndTime} setValue={setDateAndTime} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={comments.length===0} variant="outlined" value={comments} onChange={(e) => setComments(e.target.value)} label="comments" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={purpose.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={purpose} onChange={(e) => setPurpose(e.target.value)} label="Purpose" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'45%',}}></Typography>
              <Typography variant="h2"> File Car And Driver History</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'45%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddHouse