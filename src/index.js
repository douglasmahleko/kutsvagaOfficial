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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <App>
              <Box>
                <Routes>
                  <Route path="/" element = {<Home />} />
                  <Route path="/addAgent" element = {<AddAgent />} />
                  <Route path="/showAgents" element = {<ShowAgents />} />
                  <Route path="/addClient" element = {<AddClient />} />
                  <Route path="/showClients" element = {<ShowClients />} />
                  <Route path="/addHouse" element = {<AddHouse />} />
                  <Route path="/showHouses" element = {<ShowHouses />} />
                  <Route path="/addShortList" element = {<AddShortList />} />
                  <Route path="/viewShortLists" element = {<ViewShortLists />} /> 
                  <Route path="/editProfile" element = {<EditProfile />} /> 
                  <Route path="/showProfile" element = {<ShowProfile />} /> 
                </Routes>
              </Box>
            </App>
          </BrowserRouter>
  </React.StrictMode>
);

