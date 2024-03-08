import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Paper } from '@material-ui/core';
import { Stack } from "@mui/material"
import Modal from '@mui/material/Modal';

function PreviewPreRequisities({backendActor, user}){
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false)
    const [stories, setStories] = useState([
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
  ])
  const [stories1, setStories1] = useState([
    { id: "ID", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", 
     amountPerRoom:"amountPerRoom", requirements:"requirements"},
     { id: "ID", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", 
     amountPerRoom:"amountPerRoom", requirements:"requirements"},
     { id: "ID", city:"city", town:"town", phase:"phase", roomsAvailable:"roomsAvailable", 
     amountPerRoom:"amountPerRoom", requirements:"requirements"},
])
    const tableHeader1 = [
    {id:'id', name:"ID"},
    {id:'city', name:"City"},
    {id:'town', name:"Town"},
    {id:'phase', name:"Phase/Street"},
    {id:'roomsAvailable', name:"Rooms Available"},
    {id:'amountPerRoom', name:"Amount Per Room"},
    {id:'requirements', name:"Requirements"},
]
  const closeUp = () => {
    setOpen(false)
}
const openUp = () => {
    setOpen(true)
}
const recomend = () => {
    setTitle("Houses To Recommend")
    openUp()
}
    const tableHeader = [
      { id: 'title', name : 'Title' },
      { id: 'name', name : 'Name' },
      { id: 'surname', name : 'Surname' },
      { id: 'email', name : 'Email' },
      { id: 'contact', name : 'Contact' },
      { id: 'house', name : 'House ShortListed' },
      { id: 'city', name : 'City of ShotListed' },
      { id: 'roomsNeeded', name : 'Rooms Needed' },
  ]
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    
    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getCarsData();
          setStories(messages);
          console.log( "the messages " + messages)
          console.log( "the stories " + stories)
          setGetting(true)
        } catch (error) {
          console.log("Error on getting topics ", error);
          setGetting(false)
        }
      };
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setGetting(true);
          console.log("search ", search);
          const messages0 = await backendActor.searchCarData(search);
          // setSearch("");
          setStories(messages0)
          console.log("data ", stories);
          console.log("data ", messages0);
          setGetting(true);
        } catch (error) {
          console.log("Error on send title ", error);
          setGetting(false);
        }
      };
    return(
        <Box>
            
            <Paper>
                <BasicCard content={<CreateTable data={stories} link="email" focus="Requirements" routie="more" tableHeader={tableHeader} canDownload={true} onClick={recomend} />}
                    header={ <SearchBar searchValue={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search for Requirements" title="View Prerequisities" 
                    getting={getting} /> } />
            </Paper>
        
                <Modal
                sx={{ display:'flex', top:"-95px", left:"-700px" }}
                open={open}
                onClose={closeUp}
                >
                <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5} >

                    <Stack gap={1} mt={2} mb={3} >
                          <BasicCard content={<CreateTable data={stories1} link="email" sx={{ width: "500px" }} focus="Recommend" routie="more" tableHeader={tableHeader1} canDownload={true} onClick1={closeUp} />}
                                header={ <SearchBar searchValue={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                placeholder="Search for House To Recommend" title={`View Houses To Recomend`}
                                getting={getting} /> } />
                    </Stack>
                </Box>
            </Modal>
        </Box>
    )
}
export default PreviewPreRequisities