import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './client.css'
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";
import SelectBar from "../constants/selectBar";

function AddClient({backendActor}){
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [title, setTitle] = useState('')
  const [idNo, setIdNo] = useState('')
  const [contact, setContact] = useState('')
  const [dob, setDOB] = useState("")
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [nationality, setNationality] = useState('')

  const sendMessage = async (e) => {
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
          level: "client",
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
        setSending(true);
        navigate('/showCars');
      } catch (error) {
        console.log("Error on send title ", error);
        setSending(false);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate("/pay")
    }
    const getContent = () => {
      return(
        <Box sx={{ justifyContent:"center", marginRight:'100px'}}>
        <form style={{ margin: '1%' }}>
          <Stack>
              <SelectBar title="Title" value={title} sx={{ width:'60%', margin:'1%'}} onChange={setTitle} values={['Mr', 'Mrs', "Miss"]} />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={name.length===0} variant="outlined" value={name} onChange={(e) => setName(e.target.value)} label="Name eg. Simon" />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={surname.length===0} variant="outlined" value={surname} onChange={(e) => setSurname(e.target.value)} label="surname eg. Simango" />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} minRows={2} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="email eg. simonsimango@gmail.com" />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={idNo.length===0} minRows={2} variant="outlined" value={idNo} onChange={(e) => setIdNo(e.target.value)} label="identity card / license / passport Number" />
              <DatingBar title="D.O.B" value={dob} setValue={setDOB} sx={{ width:'60%', margin:'1%'}} />
              <SelectBar title="Gender" value={gender} sx={{ width:'60%', margin:'1%'}} onChange={setGender} values={['Male', 'Female']} />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={contact.length===0} minRows={2} variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact eg. +263 77 777 7777 " />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={nationality.length===0} variant="outlined" value={nationality} onChange={(e) => setNationality(e.target.value)} label="Nationality eg Zimbabwean" />
              <TextField sx={{ width:'60%', margin:'1%'}} required error={country.length===0} variant="outlined" value={country} onChange={(e) => setCountry(e.target.value)} label="country eg Zimbabwe" />
              <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" onClick={handleSubmit} type="submit"> Submit </CommonButton>
            </Stack>
          </form>
      </Box>
      )
    }
    const getHead = () => {
      return(
        <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
            
            <Typography variant="h2"> Register as A Client </Typography>
            <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'85%'}}></Typography>
        </Box>
      )
    }
  return(
    // <Box sx={{margin:'60%'}}>
        <BasicCard header={getHead()} content={getContent()} sx={{width:"800px"}} />
    // </Box>
  )
}
export default AddClient