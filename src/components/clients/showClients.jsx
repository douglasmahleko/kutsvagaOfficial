import React, { useState, useEffect } from "react";
import CreateTable from '../constants/createTable'
import BasicCard from '../constants/basicCard';
import SearchBar from "../constants/searchBar";
import { Box, ButtonGroup } from "@mui/material";
import CommonButton from "../constants/commonButton";
import './carAndAcc.css'

function ShowClients({backendActor}){
    const [stories0, setStories0] = useState([
        { email:"email",plateNo:"plateNo", datePaidCarInsur:"datePaidCarInsur", amountPaidOfInsur:"amountPaidOfInsur", expiryDateOfRadioInsur:"expiryDateOfRadioInsur",
          datePaidRadioInsur:"datePaidRadioInsur",expiryDateOfInsur:"expiryDateOfInsur",amountPaidOfRadioInsur:"amountPaidOfRadioInsur" },
        { email:"email",plateNo:"plateNo", datePaidCarInsur:"datePaidCarInsur", amountPaidOfInsur:"amountPaidOfInsur", expiryDateOfRadioInsur:"expiryDateOfRadioInsur",
          datePaidRadioInsur:"datePaidRadioInsur",expiryDateOfInsur:"expiryDateOfInsur",amountPaidOfRadioInsur:"amountPaidOfRadioInsur" },
        { email:"email",plateNo:"plateNo", datePaidCarInsur:"datePaidCarInsur", amountPaidOfInsur:"amountPaidOfInsur", expiryDateOfRadioInsur:"expiryDateOfRadioInsur",
          datePaidRadioInsur:"datePaidRadioInsur",expiryDateOfInsur:"expiryDateOfInsur",amountPaidOfRadioInsur:"amountPaidOfRadioInsur" },
    ])
    const [stories1, setStories1] = useState([
        {email:"email", plateNo:"plateNo", dateOfService:"dateOfService", costOfService:"costOfService", servicedAt:"servicedAt"},
        {email:"email", plateNo:"plateNo", dateOfService:"dateOfService", costOfService:"costOfService", servicedAt:"servicedAt"},
        {email:"email", plateNo:"plateNo", dateOfService:"dateOfService", costOfService:"costOfService", servicedAt:"servicedAt"},
    ])
    const [stories2, setStories2] = useState([
        {email:"email", plateNo:"plateNo", fuelCardPaymentDay:"fuelCardPaymentDay", fuelCardType:"fuelCardType", fuelCardAmount:"fuelCardAmount"},
        {email:"email", plateNo:"plateNo", fuelCardPaymentDay:"fuelCardPaymentDay", fuelCardType:"fuelCardType", fuelCardAmount:"fuelCardAmount"},
        {email:"email", plateNo:"plateNo", fuelCardPaymentDay:"fuelCardPaymentDay", fuelCardType:"fuelCardType", fuelCardAmount:"fuelCardAmount"},
    ])
    const [stories3, setStories3] = useState([
        {email:"email", plateNo:"plateNo", zinaraPaymentDate:"zinaraPaymentDate", zinaraExpiryDate:"zinaraExpiryDate", zinarPaymentsAmount:"zinarPaymentsAmount"},
        {email:"email", plateNo:"plateNo", zinaraPaymentDate:"zinaraPaymentDate", zinaraExpiryDate:"zinaraExpiryDate", zinarPaymentsAmount:"zinarPaymentsAmount"},
        {email:"email", plateNo:"plateNo", zinaraPaymentDate:"zinaraPaymentDate", zinaraExpiryDate:"zinaraExpiryDate", zinarPaymentsAmount:"zinarPaymentsAmount"},
    ])


    const [visible0, setVisible0] = useState(0)
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(true);
    const [sending, setSending] = useState(false);
    const tableHeader0 =[ {id:'email', name:"Email"},{id:'plateNo', name:"Plate No"},{id:'datePaidCarInsur', name:"Date Paid Car Insur"},{id:'amountPaidOfInsur', name:"Amount Paid Of Insur"},{id:'expiryDateOfRadioInsur', name:"Expiry Date Of Radio Insur"},
                            {id:'datePaidRadioInsur', name:"Date Paid Radio Insur"},{id:'expiryDateOfInsur', name:"Expiry Date Of Insur"},{id:'amountPaidOfRadioInsur', name:"Amount Paid Of Radio Insur"}]
    const tableHeader1=[
        {id:'email', name:"Email"}, 
        {id:'plateNo', name:"Plate No"}, 
        {id:'dateOfService', name:"Date Of Service"}, 
        {id:'costOfService', name:"Cost Of Service"}, 
        {id:'servicedAt', name:"servicedAt"}]
    const tableHeader2=[ {id:'email', name:"Email"}, {id:'plateNo', name:"Plate No"}, {id:'fuelCardPaymentDay', name:"Fuel Card Payment Day"}, {id:'fuelCardType', name:"Fuel Card Type"}, {id:'fuelCardAmount', name:"Fuel Card Amount"}]
    const tableHeader3=[ {id:'email', name:"Email"}, {id:'plateNo', name:"Plate No"}, {id:'zinaraPaymentDate', name:"Zinara Payment Date"}, {id:'zinaraExpiryDate', name:"Zinara Expiry Date"}, {id:'zinarPaymentsAmount', name:"Zinara Payments Amount"}]
    
    // useEffect(() => {
    //     getCars();
    //   }, []);

    const getCars = async () => {
        try {
          const messages0 = await backendActor.getCarsAndInsuranceData();
          const messages1 = await backendActor.getCarsAndServiceData();
          const messages2 = await backendActor.getCarsAndFuelData();
          const messages3 = await backendActor.getCarsAndZinaraData();
          setStories0(messages0);
          setStories1(messages1);
          setStories2(messages2);
          setStories3(messages3);
          setGetting(true)
        } catch (error) {
          console.log("Error on getting topics ", error);
          setGetting(false)
        }
      };
      const searchCarAndFuelData = async () => {
        if(search != ""){
            try { 
                const messages0 = await backendActor.searchCarAndFuelData(search);
                setStories0([]);
                setStories0(messages0);
                // console.log("the stories receeived ", stories);
                setGetting(true)
              } catch (error) {
                console.log("Error on getting topics ", error);
                setGetting(false)
            }
        }
      };
      const buttons = [
        <CommonButton size='large' variant = {visible0 == 0 ? 'outlined' : "contained"} onClick={() => setVisible0(0)}>get Insurance Infor</CommonButton>, 
        <CommonButton size='large' variant = {visible0 == 1 ? 'outlined' : "contained"} onClick={() => setVisible0(1)}>get Service Infor</CommonButton>,
        <CommonButton size='large' variant = {visible0 == 2 ? 'outlined' : "contained"} onClick={() => setVisible0(2)}>get Fuel Infor</CommonButton>,  
        <CommonButton size='large' variant = {visible0 == 3 ? 'outlined' : "contained"} onClick={() => setVisible0(3)}>get Zinara Infor</CommonButton>
      ];
    return(
    <Box>
      <Box sx={{
        display: 'flex',
        marginLeft:'150px',
        flexDirection: 'column',
        marginTop:"-5vh",
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
        
      </Box>
      <div className={ visible0 == 0 ? "show" : "hide"}>
        <BasicCard content={<CreateTable data={stories0} 
            tableHeader={tableHeader0} />}
            header={ <SearchBar searchValue={search} 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search for car insurance Infor" 
              title="Insurance information" 
              getting={getting} /> } />
      </div>
      <div className={visible0 == 1 ? "show" : "hide"}>
        <BasicCard content={<CreateTable data={stories1} 
            tableHeader={tableHeader1} />}
            header={ <SearchBar searchValue={search} 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search for Service history" 
              title="Service History" getting={getting} /> } />
      </div>
      <div className={visible0 == 2 ? "show" : "hide"}>
          <BasicCard content={<CreateTable data={stories2} 
            tableHeader={tableHeader2} />}
            header={ <SearchBar searchValue={search} 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search for Fuel History" 
              title="Fiel History Services" getting={getting} /> } />
      </div>
      <div className={visible0 == 3 ? "show" : "hide"}>
          <BasicCard content={<CreateTable data={stories3} 
            tableHeader={tableHeader3} />}
            header={ <SearchBar searchValue={search} 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search for Zinara Information" 
              title="Zinara Information" getting={getting} /> } />
      </div>
    </Box>
    )
}
export default ShowClients