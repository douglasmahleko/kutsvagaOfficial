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
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false)
    const [stories, setStories] = useState(null)
    const [stories1, setStories1] = useState(null)

    const tableHeader = [
    {id:'clientEmail', name:"Client Email"},
    {id:'town', name:"Town"},
    {id:'phase', name:"Phase/Street"},
    {id:'roomsNeeded', name:"Rooms Needed"},
    {id:'amountPerRoom', name:"Amount Per Room"},
    {id:'requirements', name:"Requirements"},
    {id:'budget', name:"Budget"}, 
    {id:'city', name:"City"},
    {id:'numOfRooms', name:"Num Of Rooms"},
    {id:'totalAmount', name:"Total Amount"},
    {id:'country', name:"Country"},
    {id:'personalInfo', name:"Personal Info"},
    {id:'consideration', name:"Consideration"},
    {id:'prerequisites', name:"Prerequisites"}, 
    {id:'dateExpectingHouse', name:"Date Expecting House"}, 
  ]
  const tableHeader1 = [
    {id:'agent', name:"Agent"},
    {id:'city', name:"City"},
    {id:'town', name:"Town"},
    {id:'phase', name:"Phase/Street"},
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
    
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setGetting(true);
          const messages0 = await backendActor.searchCarData(search);
          setStories(messages0)
          setGetting(true);
        } catch (error) {
          setGetting(false);
        }
      };
      useEffect(() => {
        let urlNeeds = 'http://localhost:3000/clientsNeeds'
        let urlHouses = 'http://localhost:3000/houses'

        fetch(urlNeeds)
        .then(res => res.json())
        .then(datas => {
          setStories(datas)  
        })

        fetch(urlHouses)
        .then(res => res.json())
        .then(datas => {
          let filteredData = []
        if(user.level == "agent"){
          console.log(user.level)
          datas.forEach(dat => {
            if(dat.agent == user.email){
              filteredData.push(dat)
            }
          })
          setStories1(filteredData)
        }
        })
    }, [])
    const viewPreRequisities = () => {
      return(
        <Box>
        <Paper>
            <BasicCard content={<CreateTable data={stories} link="clientEmail" focus="Requirements" routie="more" tableHeader={tableHeader} canDownload={true} onClick={recomend} />}
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
                      <BasicCard content={<CreateTable data={stories1} link="agent" sx={{ width: "500px" }} focus="Recommend" routie="more" tableHeader={tableHeader1} canDownload={true} onClick1={closeUp} />}
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
    return(
        <>
          { stories && viewPreRequisities()}
        </>
    )
}
export default PreviewPreRequisities