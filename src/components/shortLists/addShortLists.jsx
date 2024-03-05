import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";


function AddShortList({backendActor}){
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [accountant, setAccountant] = useState('')
    const [signedBy, setSignedBy] = useState('')
    const [purposeOfMoney, setPurposeOfMoney] = useState('')
    const [amountGiven, setAmountGiven] = useState('')
    const [driver, setDriver] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          const message = {
            accountant: accountant,
            signedBy: signedBy,
            purposeOfMoney: purposeOfMoney,
            amountGiven: parseInt(amountGiven),
            driver: driver
          };
          await backendActor.addDriverAndAccountant(message);
          setAccountant("");
          setSignedBy("");
          setPurposeOfMoney("");
          setAmountGiven("");
          setDriver("");
          setSending(true);
          navigate('/showDriverAndAccounts');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={accountant.length===0} variant="outlined" value={accountant} onChange={(e) => setAccountant(e.target.value)} label="Accountant Name" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={signedBy.length===0} variant="outlined" value={signedBy} onChange={(e) => setSignedBy(e.target.value)} label="Signed By" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={purposeOfMoney.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={purposeOfMoney} onChange={(e) => setPurposeOfMoney(e.target.value)} label="Purpose Of Money" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={amountGiven.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={amountGiven} onChange={(e) => setAmountGiven(e.target.value)} label="Amount Given" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={driver.length===0} variant="outlined" value={driver} onChange={(e) => setDriver(e.target.value)} label="driver" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'80%',}}></Typography>
              <Typography variant="h2"> File Driver And Accounting History</Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'80%'}}></Typography>
          </Box>
        )
      }
    return(
      <BasicCard header={getHead()} content={getContent()} />
    )
}
export default AddShortList