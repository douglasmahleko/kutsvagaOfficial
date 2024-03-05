import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";

function AddAgent({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [plateNo, setPlateNo] = useState('')
    const [engineNo, setEngineNo] = useState('')
    const [nameOfCar, setNameOfCar] = useState('')
    const [type, setType] = useState('')
    const [dateCarBought, setDateCarBought] = useState("")
    const [audometer, setAudometer] = useState('')
    const [department, setDepartment] = useState('')
    const [status, setStatus] = useState('')
    const [mileageToDoService, setMileageToDoService] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            engineNo: engineNo,
            dateCarBought: dateCarBought,
            mileageToDoService: parseFloat(mileageToDoService),
            plateNo: plateNo,
            addedBy: "topic",
            statusOfCar: status,
            audometerOnBuying: parseFloat(audometer),
            carName: nameOfCar,
            carType: type,
            department: department
          };
          await backendActor.addCar(message);
          setDepartment("");
          setPlateNo("");
          setEngineNo("");
          setNameOfCar("");
          setType("");
          setDateCarBought("");
          setAudometer("");
          setStatus("");
          setMileageToDoService("");
          setSending(true);
          navigate('/showCars');
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
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="Plate No" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={engineNo.length===0} variant="outlined" value={engineNo} onChange={(e) => setEngineNo(e.target.value)} label="Engine No" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={nameOfCar.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={nameOfCar} onChange={(e) => setNameOfCar(e.target.value)} label="Name Of Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={type.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={type} onChange={(e) => setType(e.target.value)} label="Type of the Car" />
                <DatingBar title="Date Car Bought" value={dateCarBought} setValue={setDateCarBought} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={audometer.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={audometer} onChange={(e) => setAudometer(e.target.value)} label="Audometer On Purchase" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={department.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={department} onChange={(e) => setDepartment(e.target.value)} label="Department" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={status.length===0} variant="outlined" value={status} onChange={(e) => setStatus(e.target.value)} label="Status of Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={mileageToDoService.length===0} variant="outlined" value={mileageToDoService} onChange={(e) => setMileageToDoService(e.target.value)} label="Mileage To Do Service" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%',}}></Typography>
              <Typography variant="h2"> File A New Car</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddAgent
