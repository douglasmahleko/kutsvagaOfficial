import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";

function ShowProfile({backendActor, user}){
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  useEffect(() => {
    let url = ''
    if(user.level == 'agent'){
      url = 'http://localhost:3000/agents'
    }
    else if(user.level == 'client'){
      url = 'http://localhost:3000/clients'
    }
    fetch(url)
    .then(res => res.json())
    .then(datas => {
      datas.forEach(dat => {
        if(dat.email == user.email){
          setData(dat)
        }
      })
      
      
    })
}, [])
const userInfo = {...data, ...user}

  const [sending, setSending] = useState(false);
  const [surname, setSurname] = useState(userInfo.surname)
  const [email, setEmail] = useState(userInfo.email)
  const [gender, setGender] = useState(userInfo.gender)
  const [title, setTitle] = useState(userInfo.title)
  const [idNo, setIdNo] = useState(userInfo.idNo)
  const [contact, setContact] = useState(userInfo.contact)
  const [dob, setDOB] = useState(userInfo.dob)
  const [name, setName] = useState(userInfo.name)
  const [country, setCountry] = useState(userInfo.country)
  const [nationality, setNationality] = useState(userInfo.nationality)
  const [username, setusername] = useState(userInfo.username)
  const [regExpire, setregExpire] = useState(userInfo.regExpire)
  const [amountInDolls, setamountInDolls] = useState(userInfo.amountInDolls)
  const [amountInICP, setamountInICP] = useState(userInfo.amountInICP)
  const [level, setlevel] = useState(userInfo.level)

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
          regExpire: data.regExpire,
          amountInDolls:  data.amountInDolls,
          amountInICP:  data.amountInICP,
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
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={email} label="surname eg. Simango" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={email} label="username" /> */}
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={email} label="email eg. simonsimango@gmail.com" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={idNo} label="identity card / license / passport Number" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={dob} label="date of birth" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={gender} label="gender" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={contact} label="Contact eg. +263 77 777 7777 " />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={nationality} label="Nationality eg Zimbabwean" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={country} label="country eg Zimbabwe" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={level} label="level" />
                {
                  user.level == 'agent' ? (
                    <div>
                      <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={data.regExpire} label="registration Expiry date" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={data.amountInDolls} label="amount In Dollars( $ )" />
                <TextField sx={{ width:'60%', margin:'1%'}} required variant="outlined" value={data.amountInICP} label="amount In ICP ( Bitcoins )" />
                    </div>
                  ) : (
                    null
                  )
                }
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
        <div>
          {
          data && <BasicCard header={getHeadClient()} content={getContentClient()} />
        }
        </div>
    )
}
export default ShowProfile