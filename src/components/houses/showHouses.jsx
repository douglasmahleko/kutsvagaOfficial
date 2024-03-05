import React, { useState, useEffect } from "react"; 
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowHouses({backendActor}){
    const [stories, setStories] = useState([
    {email:"email",plateNo:"plateNo",destination:"destination",dateAndTime:"dateAndTime",purpose:"purpose",importance:"importance",
        initialOdometerOnStartingJourney:"initialOdometerOnStartingJourney",finalOdometerOnFinishingJourney:"finalOdometerOnFinishingJourney",comments:"comments"},
    {email:"email",plateNo:"plateNo",destination:"destination",dateAndTime:"dateAndTime",purpose:"purpose",importance:"importance",
        initialOdometerOnStartingJourney:"initialOdometerOnStartingJourney",finalOdometerOnFinishingJourney:"finalOdometerOnFinishingJourney",comments:"comments"},
    {email:"email",plateNo:"plateNo",destination:"destination",dateAndTime:"dateAndTime",purpose:"purpose",importance:"importance",
        initialOdometerOnStartingJourney:"initialOdometerOnStartingJourney",finalOdometerOnFinishingJourney:"finalOdometerOnFinishingJourney",comments:"comments"},
    {email:"email",plateNo:"plateNo",destination:"destination",dateAndTime:"dateAndTime",purpose:"purpose",importance:"importance",
        initialOdometerOnStartingJourney:"initialOdometerOnStartingJourney",finalOdometerOnFinishingJourney:"finalOdometerOnFinishingJourney",comments:"comments"},
])
    const tableHeader = [
    {id:'email', name:"Email"},{id:'plateNo', name:"Plate No"},{id:'destination', name:"Destination"},{id:'dateAndTime', name:"Date And Time"},
    {id:'purpose', name:"Purpose"},{id:'importance', name:"Importance"},{id:'initialOdometerOnStartingJourney', name:"Initial Odometer On Starting Journey"},
    {id:'finalOdometerOnFinishingJourney', name:"Final Odometer On Finishing Journey"},{id:'comments', name:"Comments"}
]
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
        <BasicCard content={<CreateTable data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for cars and their drivers" title="Our Cars and The Driver history" getting={getting} /> } />
    )
}
export default ShowHouses