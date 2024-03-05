import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ViewShortLists({backendActor}){
    const [stories, setStories] = useState([
        {accountant:"accountant",driver:"driver",amountGiven:"amountGiven",purposeOfMoney:"purposeOfMoney",signedBy:"signedBy"},
        {accountant:"accountant",driver:"driver",amountGiven:"amountGiven",purposeOfMoney:"purposeOfMoney",signedBy:"signedBy"},
        {accountant:"accountant",driver:"driver",amountGiven:"amountGiven",purposeOfMoney:"purposeOfMoney",signedBy:"signedBy"},
    ])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const tableHeader = [
        {id:"accountant", name:"accountant"},{id:"driver", name:"Driver"},{id:"amountGiven", name:"Amount Given"},
        {id:"purposeOfMoney", name:"Purpose Of Money"},{id:"signedBy", name:"Signed By"}]
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

    return(
        <BasicCard content={<CreateTable data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for driver and accounting history" title="Our Spendings on drivers" getting={getting} /> } />
    )
}
export default ViewShortLists