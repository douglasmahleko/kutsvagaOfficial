import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowAgents({backendActor, user}){
    const [visible, setVisible] = useState(false)
    const [stories, setStories] = useState([
      {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
      {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
      {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
  ])

    const tableHeader = [
      { id: 'title', name : 'Title' },
      { id: 'name', name : 'Name' },
      { id: 'surname', name : 'Surname' },
      { id: 'username', name : 'Username' },
      { id: 'email', name : 'Email' },
      { id: 'contact', name : 'Contact' },
      { id: 'nationality', name : 'Nationality' },
      { id: 'country', name : 'Country' },
  ]
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
        <BasicCard content={<CreateTable link="email" focus="housesByAgent" routie="/more" data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} 
         onChange={(e) => setSearch(e.target.value)} 
         placeholder="Search for Agents" title="Available Agents" 
         getting={getting} /> } />
    )
}
export default ShowAgents