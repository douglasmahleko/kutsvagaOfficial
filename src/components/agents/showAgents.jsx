import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowAgents({backendActor, user}){
    const [visible, setVisible] = useState(false)
    const [stories, setStories] = useState(null)
  //   const [stories, setStories] = useState([
  //     {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
  //     {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
  //     {title: "title", name:"name", surname:"surname", username:"username", email:"email", contact:"contact" , nationality:"nationality", country:"country"},
  // ])

    const tableHeader = [
      { id: 'title', name : 'Title' },
      { id: 'name', name : 'Name' },
      { id: 'surname', name : 'Surname' },
      { id: 'email', name : 'Email' },
      { id: 'contact', name : 'Contact' },
      { id: 'dob', name : 'D.O.B' },
      { id: 'gender', name : 'Gender' },
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
      useEffect(() => {
        let url = 'http://localhost:3000/users'

        fetch(url)
        .then(res => res.json())
        .then(datas => {
          let filteredData = []
          datas.forEach(dat => {
            if(dat.level == "agent"){
              filteredData.push(dat)
            }
          })
          setStories(filteredData)  
          console.log("agents ", stories)
        })
    }, [])
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setGetting(true);
          console.log("search ", search);
          const messages0 = await backendActor.searchCarData(search);
          setStories(messages0)
          setGetting(true);
        } catch (error) {
          setGetting(false);
        }
      };

    return(
        <>
          { stories && <BasicCard content={<CreateTable link="email" focus="housesByAgent" routie="/more" data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} 
         onChange={(e) => setSearch(e.target.value)} 
         placeholder="Search for Agents" title="Available Agents" 
         getting={getting} /> } /> }
        </>
    )
}
export default ShowAgents