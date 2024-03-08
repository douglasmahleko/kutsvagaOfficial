import React, { useState, useEffect } from "react"; 
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
import { Box } from "@material-ui/core";
import { IconButton, Paper } from '@material-ui/core';
import { Stack } from "@mui/material"
import Modal from '@mui/material/Modal';
function ShowHouses({backendActor, user}){
    const [stories, setStories] = useState([
    { id: "ID", agent:"Agent", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", conditions:"conditions", rules:"rules",
     amountPerRoom:"amountPerRoom", requirements:"requirements", utilities:"utilities"},
     { id: "ID", agent:"Agent", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", conditions:"conditions", rules:"rules",
     amountPerRoom:"amountPerRoom", requirements:"requirements", utilities:"utilities"},
     { id: "ID", agent:"Agent", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", conditions:"conditions", rules:"rules",
     amountPerRoom:"amountPerRoom", requirements:"requirements", utilities:"utilities"},
])
    const tableHeader = [
    {id:'id', name:"ID"},
    {id:'agent', name:"Agent"},
    {id:'city', name:"City"},
    {id:'town', name:"Town"},
    {id:'phase', name:"Phase/Street"},
    {id:'roomsAvailable', name:"Rooms Available"},
    {id:'conditions', name:"Conditions"},
    {id:'rules', name:"Rules"},
    {id:'amountPerRoom', name:"Amount Per Room"},
    {id:'requirements', name:"Requirements"},
    {id:'utilities', name:"Utilities"},
]
    const closeUp = () => {
      setOpen(false)
    }
    const openUp = () => {
      setOpen(true)
    }
    const recomend = () => {
      openUp()
    } 
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    // useEffect(() => {
    //     getCars();
    //   }, []);
    const getCars = async () => {
        try {
          const messages = await backendActor.getCarsAndDriversData();
          setStories(messages);
          console.log( "the messages " + messages)
          console.log( "the messages " + backendActor)
          console.log( "the stories " + stories)
          stories.map(story => console.log("the story " + story))
        } catch (error) {
          console.log("Error on getting topics ", error);
        }
      }; 
    return(
        <Box>
          <Paper>
              <BasicCard content={<CreateTable link="agent" focus="MoreOnHouse" routie="more" data={stories} tableHeader={tableHeader} canDownload={true} onClick={recomend} />}
            header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a House" title="Available Houses" getting={getting} /> } />
          </Paper> 
                  
                  <Modal
                sx={{ display:'flex', top:"-95px", left:"-700px" }}
                open={open}
                onClose={closeUp}
                >
                <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5} >

                    <Stack gap={1} mt={2} mb={3} >
                          <BasicCard content={<CreateTable data={stories} link="email" sx={{ width: "500px" }} focus="Recommended" routie="more" tableHeader={tableHeader} canDownload={true} onClick1={closeUp} />}
                                header={ <SearchBar searchValue={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                placeholder="Search for House To Recommend" title={`View Houses Recomended`}
                                getting={getting} /> } />
                    </Stack>
                </Box>
            </Modal>   
        </Box>
    )
}
export default ShowHouses