import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";
import SelectBar from "../constants/selectBar"; 
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@material-ui/core";

function ShowProfile({backendActor, user}){
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [surname, setSurname] = useState(user.surname)
  const [email, setEmail] = useState(user.email)
  const [gender, setGender] = useState(user.gender)
  const [title, setTitle] = useState(user.title)
  const [idNo, setIdNo] = useState(user.idNo)
  const [contact, setContact] = useState(user.contact)
  const [dob, setDOB] = useState(user.dob)
  const [name, setName] = useState(user.name)
  const [country, setCountry] = useState(user.country)
  const [nationality, setNationality] = useState(user.nationality)

  const [username, setusername] = useState(user.username)
  const [regExpire, setregExpire] = useState(user.regExpire)
  const [amountInDolls, setamountInDolls] = useState(user.amountInDolls)
  const [amountInICP, setamountInICP] = useState(user.amountInICP)
  const [level, setlevel] = useState(user.level)

  console.log(user)
  const sendMessageAgent = async (e) => {
      e.preventDefault();
      try {
        setSending(true);
        const message = {
          surname: surname,
          email: email,
          idNo: idNo,
          contact: contact,
          dob: dob,
          name: name,
          country: country,
          gender: gender,
          title: title,
          nationality: nationality,
          level: level,
          username: username,
          regExpire: regExpire,
          amountInDolls: amountInDolls,
          amountInICP: amountInICP,
        };
        await backendActor.addCar(message);
        setSurname("");
        setEmail("");
        setGender("");
        setTitle("");
        setIdNo("");
        setContact("");
        setDOB("");
        setName("");
        setCountry("");
        setNationality("");
        setusername("");
        setregExpire("");
        setamountInDolls("");
        setamountInICP("");
        setlevel("");
        setSending(true);
        navigate('/showCars');
      } catch (error) {
        console.log("Error on send title ", error);
        setSending(false);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate("/showProfile")
    }
      const getContentClient = () => {
        return(
          <Box sx={{ justifyContent:"center", marginRight:'100px'}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={title} label="Title" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={name} label="Name eg. Simon" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={surname} label="surname eg. Simango" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={username} label="username" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={email} label="email eg. simonsimango@gmail.com" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={idNo} label="identity card / license / passport Number" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={dob} label="date of birth" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={gender} label="gender" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={contact} label="Contact eg. +263 77 777 7777 " />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={nationality} label="Nationality eg Zimbabwean" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={country} label="country eg Zimbabwe" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={level} label="level" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={regExpire} label="registration Expiry date" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={amountInDolls} label="amount In Dollars( $ )" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={amountInICP} label="amount In ICP ( Bitcoins )" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" onClick={() => navigate("/editProfile")} type="submit"> Edit Contact </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHeadClient = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
              
              <Typography variant="h2"> View Personal Information </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'60%'}}></Typography>
              
          </Box>
        )
      }
    return(
        <BasicCard header={getHeadClient()} content={getContentClient()} />
    )
}
export default ShowProfile