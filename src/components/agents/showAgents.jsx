import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";

function ShowAgents({backendActor}){
    const [visible, setVisible] = useState(false)
    const [stories, setStories] = useState([
      {engineNo:"engineNo", plateNo:"plateNo", dateCarBought:"dateCarBought",mileageToDoService:"mileageToDoService", addedBy:"addedBy", statusOfCar:"statusOfCar",
    audometerOnBuying:"audometerOnBuying", carName:"carName", carType:"carType",department:"department"},
    {engineNo:"engineNo", plateNo:"plateNo", dateCarBought:"dateCarBought",mileageToDoService:"mileageToDoService", addedBy:"addedBy", statusOfCar:"statusOfCar",
    audometerOnBuying:"audometerOnBuying", carName:"carName", carType:"carType",department:"department"},
    {engineNo:"engineNo", plateNo:"plateNo", dateCarBought:"dateCarBought",mileageToDoService:"mileageToDoService", addedBy:"addedBy", statusOfCar:"statusOfCar",
    audometerOnBuying:"audometerOnBuying", carName:"carName", carType:"carType",department:"department"},
  ])

    const tableHeader = [
      { id: 'engineNo', name : 'Engine No' },
      { id: 'plateNo', name : 'Plate No' },
      { id: 'dateCarBought', name : 'Date Car Bought' },
      { id: 'mileageToDoService', name : 'Mileage To DoService' },
      { id: 'addedBy', name : 'Added By' },
      { id: 'statusOfCar', name : 'Status OfCar' },
      { id: 'audometerOnBuying', name : 'Audometer On Buying'},
      { id: 'carName', name : 'Car Name' },
      { id: 'carType', name : 'Car Type' },
      { id: 'department', name : 'Department' },
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
        <BasicCard content={<CreateTable data={stories} tableHeader={tableHeader} />}
         header={ <SearchBar searchValue={search} 
         onChange={(e) => setSearch(e.target.value)} 
         placeholder="Search for cars" title="Our Cars" 
         getting={getting} /> } />
    )
}
export default ShowAgents