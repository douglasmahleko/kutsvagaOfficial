import React from "react";
import { Box, Button } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BasicCard from "./basicCard";


function ViewMore({header, data1,backendActor, user, link, routie, focus, canDownload, onClick, onClick1}){
    const navigate = useNavigate()
    const location = useLocation()
    const tableHead = location.state.header
    const data = location.state.stories
    const title = location.state.title
    const h = []
    tableHead.forEach((th) => (
        h.push(th.id)
    ))
        const getHead = () => {
            return(
              <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
                  
                  <Typography variant="h2"> { title } </Typography>
                  <Typography variant="h2" sx={{borderBottom:'2px solid black',width:'85%'}}></Typography>
              </Box>
            )
          }
    const getContent = () => {
        return(
            <Paper sx={{margin:'1%'}} >
                <div style={{ margin: '1%' }}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {
                                    h.map((head) => (
                                        <TableRow>
                                            <TableCell > {head} </TableCell>
                                            <TableCell > {data[0][head]} </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Button onClick={() => navigate(-1)}> Get Back</Button>
            </Paper>
        )
    }
    return(
        <BasicCard header={getHead()} content={getContent()} sx={{width:"800px"}} />
    )
}

export default ViewMore