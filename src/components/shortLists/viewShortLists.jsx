import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import { Box, Stack, TextField, Typography } from "@mui/material";
function ViewShortLists({backendActor, user}){
    const [stories, setStories] = useState([
        {agentEmail:"agentEmail",houseId:"houseId",agentContact:"agentContact",agentAddress:"agentAddress",roomsAvailable:"roomsAvailable", conditions:"conditions", utilities:"utilities"},
        {agentEmail:"agentEmail",houseId:"houseId",agentContact:"agentContact",agentAddress:"agentAddress",roomsAvailable:"roomsAvailable", conditions:"conditions", utilities:"utilities"},
        {agentEmail:"agentEmail",houseId:"houseId",agentContact:"agentContact",agentAddress:"agentAddress",roomsAvailable:"roomsAvailable", conditions:"conditions", utilities:"utilities"},
    ])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const tableHeader = [
        {id:"agentEmail", name:"Email"},
        {id:"houseId", name:"House Id"},
        {id:"agentContact", name:"Agent Contact"},
        {id:"agentAddress", name:"Agent Address"},
        {id:"roomsAvailable", name:"Rooms Available"},
        {id:"conditions", name:"House Conditions"},
        {id:"utilities", name:"utilities"}
      ]

    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getDriversAndAccountantsData();
          setStories(messages);
          setGetting(true)
        } catch (error) {
          console.log("Error on getting topics ", error);
          setGetting(false)
        }
      };
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2"> Houses On ShortList</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'45%'}}></Typography>
          </Box>
        )
      }
    return(
        <BasicCard content={<CreateTable user={user} data={stories} link="agentEmail" link2="houseId" focus="shortList" routie2="more" routie="more" tableHeader={tableHeader} canDownload={true} />}
         header={getHead()} />
    )
}
export default ViewShortLists