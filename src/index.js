import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddAgent from './components/agents/addAgent';
import ShowAgents from './components/agents/showAgents';
import AddClient from './components/clients/addClients';
import ShowClients from './components/clients/showClients';
import AddHouse from "./components/houses/addHouse"
import ShowHouses from "./components/houses/showHouses"
import AddShortList from "./components/shortLists/addShortLists"
import ViewShortLists from "./components/shortLists/viewShortLists"
import Home from "./components/home"
import EditProfile from "./components/profiles/editProfile"
import ShowProfile from "./components/profiles/showProfile"
import MakePayment from './components/payment/makePayment';
import PreviewPreRequisities from './components/shortLists/previewPreRequisities';
import ViewMore from './components/constants/viewMore';

const user = {
  name : "douglas",
  gender : "male",
  idNo : "70-2014449 H 13",
  title : "Mr",
  surname : "mahleko",
  username : "dmahleko@gmail.com",
  email : "dmahleko@gmail.com",
  signedInDayAndTime:[],
  loggedIn : false,
  dob : "12/12/2000",
  registered : true,
  regExpire : "12/12/2024",
  amountInDolls : 120,
  amountInICP : 1200,
  level: "agent",
  publicKey : '12345',
  contact: "0776477847",
  country : "Zimbabwe",
  nationality : "Zimbabwean"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <BrowserRouter>
            <App user={user}>
              <Box>
                  <Routes>
                  <Route path="/showHouses" element = {<ShowHouses user={user} />} />
                  <Route path="/addAgent" element = {<AddAgent />} />
                  <Route path="/showAgents" element = {<ShowAgents user={user} />} />
                  <Route path="/addClient" element = {<AddClient />} />
                  <Route path="/showClients" element = {<ShowClients user={user} />} />
                  <Route path="/addHouse" element = {<AddHouse user={user} />} />
                  <Route path="/myPrerequisites" element = {<AddShortList user={user} />} />
                  <Route path="/viewShortLists" element = {<ViewShortLists user={user} />} /> 
                  <Route path="/editProfile" element = {<EditProfile user={user} />} /> 
                  <Route path="/showProfile" element = {<ShowProfile user={user} />} /> 
                  
                  <Route path="/pay" element = {<MakePayment />} /> 
                  <Route path="/previewPrerequisites" element = {<PreviewPreRequisities />} /> 
                  <Route path="/" element = {<Home user={user} />} />
                  <Route path="/more" element = {<ViewMore user={user} />} /> 
                </Routes>
              </Box>
            </App>
          </BrowserRouter>
  </React.StrictMode>
);

