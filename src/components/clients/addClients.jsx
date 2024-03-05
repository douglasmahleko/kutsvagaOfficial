import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './carAndAcc.css'
import { Box, ButtonGroup, Stack, TextField, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import BasicCard from "../constants/basicCard";
import DatingBar from "../constants/datingBar";

function AddClient({backendActor}){
    // const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [visible0, setVisible0] = useState(0)
    const [email, setEmail] = useState('')
    const [plateNo, setPlateNo] = useState('')
    const [garage, setGarage] = useState('')
    const [company, setCompany] = useState('')
    const [fuelCardType, setFuelCardType] = useState('')
    const [fuelCardPaymentDay, setFuelCardPaymentDay] = useState('')
    const [fuelCardAmount, setFuelCardAmount] = useState(0)

    const [dateOfService, setDateOfService] = useState('')
    const [costOfService, setCostOfService] = useState(0)

    const [datePaidCarInsur, setDatePaidCarInsur] = useState('')
    const [amountPaidOfInsur, setAmountPaidOfInsur] = useState('')
    const [expiryDateOfInsur, setExpiryDateOfInsur] = useState('')

    const [zinaraPaidDate, setZinaraPaidDate] = useState('')
    const [zinarPaymentsAmount, setZinarPaymentsAmount] = useState(0)
    const [zinarExpiryDate, setZinarExpiryDate] = useState('')

    const [datePaidRadioInsur, setDatePaidRadioInsur] = useState('')
    const [amountPaidOfRadioInsur, setAmountPaidOfRadioInsur] = useState(0)
    const [expiryDateOfRadioInsur, setExpiryDateOfRadioInsur] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            if(visible0 == 2){
            setSending(true);
            const message3 = {
            plateNo: plateNo,
            fuelCardType: fuelCardType,
            email: email,
            fuelCardPaymentDay: fuelCardPaymentDay,
            fuelCardAmount: parseFloat(fuelCardAmount),
          };
          await backendActor.addCarAndFuel(message3);
          setFuelCardType("");
          setFuelCardPaymentDay("");
          setFuelCardAmount("");
        }
          else if(visible0 == 1){
            setSending(true);
            const message2 = {
                plateNo: plateNo,
                serviceCompany: company,
                email: email,
                servicedAt:garage,
                dateOfService: dateOfService,
                costOfService: parseFloat(costOfService),
              };
              await backendActor.addCarAndService(message2);
                setGarage("");
                setCompany("");
                setDateOfService("");
                setCostOfService("")
          }
          else if(visible0 == 3){
            setSending(true);
            const message0 = {
                plateNo: plateNo,
                zinaraPaymentDate: zinaraPaidDate,
                email: email,
                zinarPaymentsAmount: parseFloat(zinarPaymentsAmount),
                zinaraExpiryDate: zinarExpiryDate,
              };
              await backendActor.addCarAndZanara(message0);
                setZinaraPaidDate("")
                setZinarPaymentsAmount("")
                setZinarExpiryDate("")
          }
          else{
            setSending(true);
            const message1 = {
                plateNo: plateNo,
                datePaidRadioInsur: datePaidRadioInsur,
                email: email,
                amountPaidOfRadioInsur: parseFloat(amountPaidOfRadioInsur),
                expiryDateOfRadioInsur: expiryDateOfRadioInsur,
                datePaidCarInsur:datePaidCarInsur,
                amountPaidOfInsur:parseFloat(amountPaidOfInsur),
                expiryDateOfInsur:expiryDateOfInsur
              };
              await backendActor.addCarsAndInsurance(message1);
                setDatePaidCarInsur("")
                setAmountPaidOfInsur("")
                setExpiryDateOfInsur("")
                setDatePaidRadioInsur("")
                setAmountPaidOfRadioInsur("")
                setExpiryDateOfRadioInsur("")
          }
          setEmail("");
          setPlateNo("");
          setSending(true);
          // navigate('/showCarsAndAccountas');
        } catch (error) {
          console.log("Error on send title ", error);
          setSending(false);
        }
      };
      const getContent0 = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="The Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="The driver" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={datePaidCarInsur.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={datePaidCarInsur} onChange={(e) => setDatePaidCarInsur(e.target.value)} label="date Paid Car Insurance" /> */}
                <DatingBar title="date Paid Car Insurance" value={datePaidCarInsur} setValue={setDatePaidCarInsur} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={amountPaidOfInsur.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={amountPaidOfInsur} onChange={(e) => setAmountPaidOfInsur(e.target.value)} label="Amount Paid Of Insurance" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={expiryDateOfInsur.length===0} variant="outlined" value={expiryDateOfInsur} onChange={(e) => setExpiryDateOfInsur(e.target.value)} label="Expiry Date Of Insurance" /> */}
                <DatingBar title="Expiry Date Of Insurance" value={expiryDateOfInsur} setValue={setExpiryDateOfInsur} sx={{ width:'60%', margin:'1%'}} />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={datePaidRadioInsur.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={datePaidRadioInsur} onChange={(e) => setDatePaidRadioInsur(e.target.value)} label="Date Paid Radio Insurance" /> */}
                <DatingBar title="Date Paid Radio Insurance" value={datePaidRadioInsur} setValue={setDatePaidRadioInsur} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={amountPaidOfRadioInsur.length===0} variant="outlined" value={amountPaidOfRadioInsur} onChange={(e) => setAmountPaidOfRadioInsur(e.target.value)} label="amount Paid Of Radio Insurance" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={expiryDateOfRadioInsur.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={expiryDateOfRadioInsur} onChange={(e) => setExpiryDateOfRadioInsur(e.target.value)} label="expiry Date Of Radio Insurance" /> */}
                <DatingBar title="expiry Date Of Radio Insurance" value={expiryDateOfRadioInsur} setValue={setExpiryDateOfRadioInsur} sx={{ width:'60%', margin:'1%'}} />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead0 = () => {
        return(
          <Box sx={{marginLeft:'18%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'50%',}}></Typography>
              <Typography variant="h2"> Add Insurance History </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'50%'}}></Typography>
          </Box>
        )
      }
      const getContent1 = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="The Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="The driver" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={garage.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={garage} onChange={(e) => setGarage(e.target.value)} label="The garage service happened" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={company.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={company} onChange={(e) => setCompany(e.target.value)} label="Company responsible" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={dateOfService.length===0} variant="outlined" value={dateOfService} onChange={(e) => setDateOfService(e.target.value)} label="Date Of Service" /> */}
                <DatingBar title="Date Of Service" value={datePaidCarInsur} setValue={setDateOfService} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={costOfService.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={costOfService} onChange={(e) => setCostOfService(e.target.value)} label="Cost Of Service" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead1 = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'40%',}}></Typography>
              <Typography variant="h2"> Add Service History </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'40%'}}></Typography>
          </Box>
        )
      }
      const getContent2 = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="The Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="The driver" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={fuelCardType.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={fuelCardType} onChange={(e) => setFuelCardType(e.target.value)} label="Fuel Card Type" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={fuelCardPaymentDay.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={fuelCardPaymentDay} onChange={(e) => setFuelCardPaymentDay(e.target.value)} label="fuel Card Payment Date" /> */}
                <DatingBar title="fuel Card Payment Date" value={fuelCardPaymentDay} setValue={setFuelCardPaymentDay} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={fuelCardAmount.length===0} variant="outlined" value={fuelCardAmount} onChange={(e) => setFuelCardAmount(e.target.value)} label="Fuel Card Amount" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead2 = () => {
        return(
          <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%',}}></Typography>
              <Typography variant="h2"> Add Fuel History </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'35%'}}></Typography>
          </Box>
        )
      }
      const getContent3 = () => {
        return(
          <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
          <form style={{ margin: '1%' }}>
            <Stack>
                <TextField sx={{ width:'60%', margin:'1%'}} required error={plateNo.length===0} variant="outlined" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} label="The Car" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={email.length===0} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="The driver" />
                {/* <TextField sx={{ width:'60%', margin:'1%'}} required error={zinaraPaidDate.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={zinaraPaidDate} onChange={(e) => setZinaraPaidDate(e.target.value)} label="Zinara Paid Date" /> */}
                <DatingBar title="Zinara Paid Date" value={zinaraPaidDate} setValue={setZinaraPaidDate} sx={{ width:'60%', margin:'1%'}} />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={zinarPaymentsAmount.length===0} minRows={2} maxRows={2} multiline variant="outlined" value={zinarPaymentsAmount} onChange={(e) => setZinarPaymentsAmount(e.target.value)} label="Zinara Payments Amount" />
                <TextField sx={{ width:'60%', margin:'1%'}} required error={zinarExpiryDate.length===0} variant="outlined" value={zinarExpiryDate} onChange={(e) => setZinarExpiryDate(e.target.value)} label="Zinara Expiry Date" />
                <CommonButton disabled={sending} sx={{ width:'60%', marginLeft:'1%'}} variant="contained" type="submit"> Submit </CommonButton>
              </Stack>
            </form>
        </Box>
        )
      }
      const getHead3 = () => {
        return(
          <Box sx={{marginLeft:'15%', justifyContent:"center"}}>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'60%',}}></Typography>
              <Typography variant="h2"> Add Zinara Payments History </Typography>
              <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'60%'}}></Typography>
          </Box>
        )
      }
      const buttons = [
        <CommonButton size='large' variant = {visible0 == 0 ? 'outlined' : "contained"}  onClick={() => setVisible0(0)}>Add Insurance Infor</CommonButton>, 
        <CommonButton size='large' variant = {visible0 == 1 ? 'outlined' : "contained"} onClick={() => setVisible0(1)}>Add Service Infor</CommonButton>,
        <CommonButton size='large' variant = {visible0 == 2 ? 'outlined' : "contained"} onClick={() => setVisible0(2)}>Add Fuel Infor</CommonButton>,  
        <CommonButton size='large' variant = {visible0 == 3 ? 'outlined' : "contained"} onClick={() => setVisible0(3)}>Add Zinara Infor</CommonButton>
      ];
    return(
        <Box >
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
                <div className={ visible0 == 2 ? "show" : "hide"}>
                  <BasicCard header={getHead2()} content={getContent2()} />
                </div>

                <div className={ visible0 == 1 ? "show" : "hide"}>
                  <BasicCard header={getHead1()} content={getContent1()} />
                </div>

                <div className={ visible0 == 3 ? "show" : "hide"}>
                  <BasicCard header={getHead3()} content={getContent3()} />
                </div>

                <div className={ visible0 == 0 ? "show" : "hide"}>
                  <BasicCard header={getHead0()} content={getContent0()} />
                </div>
        </Box>
    )
}
export default AddClient