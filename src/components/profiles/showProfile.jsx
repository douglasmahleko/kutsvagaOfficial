import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowProfile({backendActor}){
    const [stories, setStories] = useState([
        {hr:"hr", punishment:"punishment", driver:"driver", offense:"offense",judgement:"judgement"},
        {hr:"hr", punishment:"punishment", driver:"driver", offense:"offense",judgement:"judgement"},
        {hr:"hr", punishment:"punishment", driver:"driver", offense:"offense",judgement:"judgement"},
    ])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const tableHeader = [
        {id:"hr" , name:"HR"}, {id:"punishment" , name:"Punishment"}, {id:"driver" , name:"Driver"}, 
        {id:"offense" , name:"Offense"},{id:"judgement" , name:"Judgement"}
    ]
    
    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getDriversAndHRData();
          setStories(messages);
          setGetting(true)
        } catch (error) {
          console.log("Error on getting topics ", error);
          setGetting(false)
        }
      };

    return(
        <BasicCard content={<CreateTable data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for complaints" title="HR hearings" getting={getting} /> } />
    )
}
export default ShowProfile