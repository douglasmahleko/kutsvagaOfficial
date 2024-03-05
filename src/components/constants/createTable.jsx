import React, { useState, useEffect } from "react";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Box, Button, FormControlLabel, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function CreateTable({tableHeader, data,backendActor}){
    const [tableHead, setTableHead] = useState(tableHeader)
    let dataLength = data.length
    const [dat, setDat] = useState(data)
    const h = []
    tableHead.forEach((th) => (
        h.push(th.id)
    ))
    const [rowsPerpage, setRowsPerpage] = useState(5)
    const [page, setPage] = useState(0)

    const handlePageChange = (e, newpage) => {
        setPage(newpage)
    }
    const handleRowChange = (e) => {
        setRowsPerpage(+e.target.value)
        setPage(0)
    }

    const getFile = () => {
        let info = ""
        data.forEach((story) => (
            // info = info  + "\n"
            h.map((head) => info = info + story[head] + " - ")
        ))
        const element = document.createElement("a")
        const file = new Blob([info], {
          type:"text/plain; charset=utf-8",
        })
        element.href = URL.createObjectURL(file)
        element.download = "data.txt"
        document.body.appendChild(element)
        element.click()
      }
    return(
        <Box>
            <Box sx={{marginLeft:'30%'}} >
                <Button onClick={getFile} variant="contained" endIcon={<DownloadForOfflineIcon />}>
                    Download File
                </Button>
            </Box>
            <Paper sx={{margin:'1%'}} >
            <div style={{ margin: '1%' }}>
            <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor:'midnightblue' }} >
                                    {
                                        tableHead.map((col) => (
                                            <TableCell key={col.id} style={{ color:'white' }} > {col.name} </TableCell>
                                        ))
                                    }
                                    <TableCell key='action' style={{ color:'white' }} > Action </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    dat.slice(page*rowsPerpage, page * rowsPerpage + rowsPerpage).map((company) => (
                                        <TableRow>
                                            {
                                                h.map((head) => (
                                                    <TableCell  > {company[head]} </TableCell>
                                                ))
                                            }
                                            <TableCell >
                                                <Button variant="contained" size="small" color="primary" mt={5} >Edit</Button>
                                                <Button variant="contained" mt={5} size="small" color="error"  >Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination 
                        rowsPerPageOptions={[5, 10, 20]}
                        rowsPerPage={rowsPerpage}
                        page={page}
                        count={dataLength}
                        component={"div"}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowChange}
                    >

                    </TablePagination>
                </div>
            </Paper>
        </Box>
    )
}

export default CreateTable