import React, { useState } from 'react'
import Box from '@mui/material/Box';
import './components/navBar/navBar.css'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import LayOut from './components/layOut';
import GetHouseByAgent from './components/houses/getHouseByAgent';

function App({user}) {
  
  const [userLogged, setuserLogged] = useState([]);
  
  return (
    <BrowserRouter>
            <LayOut user={userLogged}>
              <Box>
                  <Routes>
                  <Route path="/showHouses" element = {<ShowHouses user={userLogged} />} />
                  <Route path="/addAgent" element = {<AddAgent />} />
                  <Route path="/showAgents" element = {<ShowAgents user={userLogged} />} />
                  <Route path="/addClient" element = {<AddClient />} />
                  <Route path="/showClients" element = {<ShowClients user={userLogged} />} />
                  <Route path="/addHouse" element = {<AddHouse user={userLogged} />} />
                  <Route path="/myPrerequisites" element = {<AddShortList user={userLogged} />} />
                  <Route path="/viewShortLists" element = {<ViewShortLists user={userLogged} />} /> 
                  <Route path="/editProfile" element = {<EditProfile user={userLogged} />} /> 
                  <Route path="/showProfile" element = {<ShowProfile user={userLogged} />} /> 
                  <Route path="/getHouseByAgent" element = {<GetHouseByAgent />} /> 
                  <Route path="/pay" element = {<MakePayment />} /> 
                  <Route path="/previewPrerequisites" element = {<PreviewPreRequisities user={userLogged} />} /> 
                  <Route path="/" element = {<Home setuserLogged={setuserLogged} />} />
                  <Route path="/more" element = {<ViewMore user={userLogged} />} />
                </Routes>
              </Box>
            </LayOut>
          </BrowserRouter>
  );
}

export default App;
