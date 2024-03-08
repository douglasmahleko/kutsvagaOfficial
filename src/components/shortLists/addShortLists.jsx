import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";


function AddShortList({backendActor, user}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);

    const [numOfRooms, setnumOfRooms] = useState('')
    const [amountPerRoom, setamountPerRoom] = useState('')
    const [totalAmount, settotalAmount] = useState('')
    const [town, settown] = useState('')
    const [country, setcountry] = useState('')
    const [city, setcity] = useState('')
    const [personalInfo, setpersonalInfo] = useState('')
    const [phase, setphase] = useState('')
    const [consideration, setconsideration] = useState('')
    const [prerequisites, setprerequisites] = useState('')
    const [dateExpectingHouse, setdateExpectingHouse] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            numOfRooms: numOfRooms,
            amountPerRoom: amountPerRoom,
            totalAmount: totalAmount,
            town: town,
            country: country,
            city: city,
            personalInfo: personalInfo,
            phase: phase,         
            consideration : consideration,
            reprerequisites : prerequisites,
            dateExpectingHouse: dateExpectingHouse
          };
          await backendActor.addDriverAndAccountant(message);
          setnumOfRooms("");
          setamountPerRoom("");
          settotalAmount("");
          settown("");
          setcountry("");
          setcity("");
          setpersonalInfo("");
          setconsideration("");
          setphase("");
          setprerequisites("");
          setSending(true);
          setdateExpectingHouse('')
          // navigate('/showDriverAndAccounts');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={numOfRooms.length===0} variant="outlined" value={numOfRooms} onChange={(e) => setnumOfRooms(e.target.value)} label="num Of Rooms" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={amountPerRoom.length===0} variant="outlined" value={amountPerRoom} onChange={(e) => setamountPerRoom(e.target.value)} label="amount Per Room" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={totalAmount.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={totalAmount} onChange={(e) => settotalAmount(e.target.value)} label="total Amount" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={town.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={town} onChange={(e) => settown(e.target.value)} label="town" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={country.length===0} variant="outlined" value={country} onChange={(e) => setcountry(e.target.value)} label="country" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={city.length===0} variant="outlined" value={city} onChange={(e) => setcity(e.target.value)} label="city" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={personalInfo.length===0} variant="outlined" value={personalInfo} onChange={(e) => setpersonalInfo(e.target.value)} label="personal Info" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={phase.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={phase} onChange={(e) => setphase(e.target.value)} label="phase" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={consideration.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={consideration} onChange={(e) => setconsideration(e.target.value)} label="consideration" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={prerequisites.length===0} variant="outlined" value={prerequisites} onChange={(e) => setprerequisites(e.target.value)} label="prerequisites" />
                <DatingBar title="Date To Move In" value={dateExpectingHouse} setValue={setdateExpectingHouse} sx={{ width:'60%', margin:'1%'}} />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={dateExpectingHouse.length===0} variant="outlined" value={dateExpectingHouse} onChange={(e) => setdateExpectingHouse(e.target.value)} label="date Expecting House" /> */}
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2"> What Am I Looking For</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'60%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddShortList