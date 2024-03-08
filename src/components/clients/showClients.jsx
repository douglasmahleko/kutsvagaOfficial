import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
import { useNavigate } from "react-router-dom";

function ShowClients({backendActor, user}){
    const [visible, setVisible] = useState(false)
    const [stories, setStories] = useState([
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
      {title: "title", name:"name", surname:"surname", email:"email", contact:"contact", house : "house", city:"city",  roomsNeeded:"roomsNeeded"},
  ])

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
        <BasicCard content={<CreateTable data={stories} link="email" focus="MoreOnClient" routie="/more" tableHeader={tableHeader} canDownload={true} />}
         header={ <SearchBar searchValue={search} 
         onChange={(e) => setSearch(e.target.value)} 
         placeholder="Search for House" title="Available Clients" 
         getting={getting} /> } />
    )
}
export default ShowClients