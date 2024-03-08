import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";
import SelectBar from "../constants/selectBar";

function AddAgent({backendActor}){
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
    const [physicalAddress, setPhysicalAdress] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [nationality, setNationality] = useState('')
    const [province, setProvince] = useState('')
    const [location, setLocation] = useState('')

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
            physicalAddress: physicalAddress,
            country: country,
            city: city,
            province: province,
            location: location,
            gender: gender,
            title: title,
            level: "agent",
            nationality: nationality
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
          setPhysicalAdress("");
          setCountry("");
          setCity("");
          setNationality("");
          setProvince("");
          setLocation("")
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
                <TextField sx={{ width:'60%', margin:'1%'}} required error={physicalAddress.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={physicalAddress} onChange={(e) => setPhysicalAdress(e.target.value)} label="Physical Address eg. 1234 UNIT K" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={location.length===0} variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} label="Location eg. Seke 1 and 2" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={city.length===0} variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} label="City or Town eg. Chitungiza" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={nationality.length===0} variant="outlined" value={nationality} onChange={(e) => setNationality(e.target.value)} label="Nationality eg Zimbabwean" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={province.length===0} variant="outlined" value={province} onChange={(e) => setProvince(e.target.value)} label="Province eg. Harare" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={country.length===0} variant="outlined" value={country} onChange={(e) => setCountry(e.target.value)} label="country eg Zimbabwe" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} onClick={handleSubmit} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              
              <Typography variant="h2"> Register as An Agent </Typography>
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
export default AddAgent
