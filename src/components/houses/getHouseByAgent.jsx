import React, { useState, useEffect } from "react"; 
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
import { Box } from "@material-ui/core";
import { Paper } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material"
import Modal from '@mui/material/Modal';

function GetHouseByAgent({backendActor}){
  const [stories, setStories] = useState(null)
  const location = useLocation()
  const tableHeader = [
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
    const data = location.state.stories
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
    useEffect(() => {
      let url = 'http://localhost:3000/houses'

      fetch(url)
      .then(res => res.json())
      .then(datas => {
        let filteredData = []
          datas.forEach(dat => {
            if(data.email == dat.agent){
              filteredData.push(dat)
            }
          })
          setStories(filteredData)
      })
  }, [])

    const getCars = async () => {
        try {
          const messages = await backendActor.getCarsAndDriversData();
          setStories(messages);
        } catch (error) {
          console.log("Error on getting topics ", error);
        }
      }; 
      const showHouses = () => {
        return(
          <Box>
          <Paper>
              <BasicCard content={<CreateTable link="agent" focus="MoreOnHouse" routie="/more" data={stories} tableHeader={tableHeader} canDownload={true} onClick={recomend} />}
            header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a House" title={`Available Houses from ${data.email}`} getting={getting} /> } />
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
    return(
        <>
          {
            stories && showHouses()
          }
        </>
    )
}
export default GetHouseByAgent