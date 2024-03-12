import React, { useState, useEffect } from "react";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Box, Button, Stack } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate, useLocation, Link  } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import RecommendIcon from '@mui/icons-material/Recommend';
import { Badge, Tooltip, Typography } from "@material-ui/core";
import { Notifications } from "@mui/icons-material";

function CreateTable({tableHeader, data,backendActor, user, link, link2, routie, routie2, focus, canDownload, onClick, onClick1}){
    const navigate = useNavigate()
    const location = useLocation()
    const dataFroUrl = []
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
      const moreOnHouse = (tableHead, data) => {
        dataFroUrl.push([tableHead])
        dataFroUrl.push([data])
        navigate('/more', {
            state:{
                header : tableHead,
                stories : data,
                title : "More On A House"
            }
        })
      }
      const housesByAnAgent = (data) => {
        navigate('/getHouseByAgent', {
            state:{
                stories : data,
            }
        })
      }
      const moreOnPreRequisities = (tableHead, data) => {
        dataFroUrl.push([tableHead])
        dataFroUrl.push([data])
        navigate('/more', {
            state:{
                header : tableHead,
                stories : data,
                title : "More On Prerequisities"
            }
        })
      }
    return(
        <Box>
            <Box sx={{marginLeft:'30%'}} >
                {
                    canDownload ? (
                        <Button onClick={console.log("download")} variant="contained" endIcon={<DownloadForOfflineIcon />}>
                    Download Data
                </Button>
                    ) : (
                        null
                    )
                }
                {
                    focus == "Recommend" || focus == "Recommended" ? (
                        <Button onClick={onClick1} sx={{marginLeft:"3px"}} variant="outlined" endIcon={<CloseIcon />}>
                    Close Recommendations
                </Button>
                    ) : (
                        null
                    )
                }
                <Tooltip title="Recommendations">
                    
                        <Button onClick={onClick} sx={{marginLeft:"3px"}} variant="outlined" endIcon={<Badge badgeContent={4} color="error"><Notifications /> </Badge>}>
                            Recommendations
                        </Button>
                    
                </Tooltip>
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
                                                            <TableCell>
                                                                {
                                                                    (head == link) ? (
                                                                        <Link to={routie} state={{
                                                                            header : tableHead,
                                                                            stories : dat,
                                                                            title : "More On Agent"
                                                                        }} > {company[head]} </Link>
                                                                    ):(
                                                                        (head == link2 ) ? (
                                                                            <Link to={routie2} > {company[head]} </Link>
                                                                        ):(
                                                                            <div>
                                                                                {company[head]}
                                                                            </div>
                                                                        )
                                                                    )
                                                                }
                                                            </TableCell>

                                                ))
                                            }
                                            <TableCell >
                                                {
                                                    (focus == "MoreOnHouse") ? (
                                                        <div>
                                                            <Button onClick={() => moreOnHouse(tableHead, dat)} variant="contained" size="small" color="primary" mt={5} >More On House </Button>
                                                            <Button onClick={() => console.log("Shortlis")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >ShortList </Button>
                                                        </div>
                                                    ) : (
                                                        (focus == "housesByAgent") ? (
                                                            <Button onClick={() => housesByAnAgent(company)} variant="contained" size="small" color="primary" mt={5} >Houses By Agent </Button>
                                                        ) : (
                                                            (focus == "MoreOnClient") ? (
                                                                <Button onClick={() => navigate("/showHouses")} variant="contained" size="small" color="primary" mt={5} >More On House ShortListed </Button>
                                                            ) : (
                                                                (focus == "shortList") ? (
                                                                    <Button onClick={() => console.log("Shortlis")} variant="contained" size="small" color="primary" mt={5} >Confirm</Button>
                                                                ) : (
                                                                    (focus == "Requirements") ? (
                                                                        <div>
                                                                            <Button onClick={onClick}  variant="contained" size="small" color="primary" mt={5} >Recommend</Button>
                                                                            <Button onClick={() => moreOnPreRequisities(tableHead, dat)} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >View Requirement</Button>
                                                                        </div>
                                                                    ) : (
                                                                        (focus == "Recommend") ? (
                                                                            <div>
                                                                                <Button onClick={onClick}  variant="contained" size="small" color="primary" mt={5} endIcon={<RecommendIcon />} >Select</Button>
                                                                                <Button onClick={() => console.log("requirement")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >More On House</Button>
                                                                            </div>
                                                                        ) : (
                                                                            (focus == "Recommended") ? (
                                                                                <div>
                                                                                    <Button onClick={onClick}  variant="contained" size="small" color="primary" mt={5} endIcon={<RecommendIcon />} >ShortList</Button>
                                                                                    <Button onClick={() => console.log("requirement")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >More On House</Button>
                                                                                </div>
                                                                            ) : (
                                                                                null
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                }
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