
import BasicCard from "../constants/basicCard"
import { Box, Stack, Typography, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../constants/commonButton";
import SelectBar from "../constants/selectBar";

function MakePayment({backendActor, user}){
    const [sending, setSending] = useState(false);
    const [level, setlevel] = useState('');
    const [amountInDollas, setAmountInDollas] = useState('');
    const [amountInBitCoins, setAmountInBitCoins] = useState('');
    const navigate = useNavigate();
    const [method, setMethod] = useState('');
    const [dgtalAcc, setDgtalAcc] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [backAccNo, setbackAccNo] = useState('');
    const [bank, setBank] = useState('')
    // const [datePaymentMade, setBank] = useState('')
    const Banks = [
      "Ecocash",
      "TeleCash",
      "OneMoney",
      "Paypal",
      "FBC",
      "NMB",
      "BankAbc",
      "AgriBank",
      "CBZ",
      "Cabs",
      "NBS",
      "NedBank",
      "StewardBank",
      "EcoBank",
    ];
    const sendMessage = async (e) => {
      e.preventDefault();
      try {
        setSending(true);
        const message = {
          email: email,
          amountInDollas: amountInDollas,
          amountInBitCoins: amountInBitCoins,
          method: method,
          dgtalAcc: dgtalAcc,
          contact: contact,
          backAccNo: backAccNo,
          bank: bank,
          level: level,
          datePaymentMade:'12/12/12'
        };
        await backendActor.addCarAndDriver(message);
        setAmountInDollas("");
        setAmountInBitCoins("");
        setMethod("");
        setDgtalAcc("");
        setEmail("");
        setContact("");
        setbackAccNo("");
        setBank("");
        setlevel("")
        setSending(true);
        navigate('/showCarAndDriver');
      } catch (error) {
        console.log("Error on send title ", error);
        setSending(false);
      }
    };
    
    useEffect(() => (
      setValues()
    ), [method]);
    const setValues = () => {
      if (level == "agent"){
        if( method == "Banking"){
          setAmountInDollas("$20")
        }
        else{
          setAmountInBitCoins("30")
        }
      }else if(level == "client"){
        if( method == "Banking"){
          setAmountInDollas("$15")
        }
        else{
          setAmountInBitCoins("25")
        }
      }
    }
    const getHead = () => {
        return(
            <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
            <Typography variant="h2"> Make Payment </Typography>
            <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'85%'}}></Typography>
        </Box>
        )
    }
    
    const getContent = () => {
        return(
          <Box sx={{ justifyContent:"center", marginRight:'100px'}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="email eg. simonsimango@gmail.com" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={contact.length===0} variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact eg. +2637777777" />
                <SelectBar title="Payment Method" value={method} sx={{ width:'60%', margin:'1%'}} onChange={setMethod} values={['ICP ( BitCoin )', 'Banking']} />
            {
              ( method === 'ICP ( BitCoin )' ) ? (
                <Box>
                  <TextField sx={{ width:'60%', margin:'1%'}} required error={amountInBitCoins.length===0} variant="outlined" value={amountInBitCoins} label="Amount in BitCoins" />
                  <TextField sx={{ width:'60%', margin:'1%'}} required error={dgtalAcc.length===0} variant="outlined" value={dgtalAcc} onChange={(e) => setDgtalAcc(e.target.value)} label="BitCoin Acc" />
                </Box>
              ) : (
                (method === "Banking") ? (
                  <Box>
                    <TextField sx={{ width:'60%', margin:'1%'}} required error={amountInDollas.length===0} variant="outlined" value={amountInDollas} label="Amount In Dollars" />
                    <SelectBar title="Select transacting Bank" value={bank} sx={{ width:'60%', margin:'1%'}} onChange={setBank} values={Banks} />
                  </Box>
                ) : (
                  null
                )
              )
            }
            {
              bank ? (
                <TextField sx={{ width:'60%', margin:'1%'}} required error={backAccNo.length===0} variant="outlined" value={backAccNo} onChange={(e) => setbackAccNo(e.target.value)} label="Bank Account Number" />
              ) : (
                null
              )
            }
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
    return(
        <BasicCard header={getHead()} content={getContent()} sx={{width:"800px"}} />
    )
}
export default MakePayment