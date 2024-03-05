import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@material-ui/core';
import { TextField, Typography } from "@mui/material"
import CommonButton from './commonButton';

function SearchBar({searchValue, onChange, placeholder, title, getting}){
    return(
        <Box sx={{display:'flex', alignItems:"center"}}>
            <Typography variant="h2" sx={{ marginLeft:"40vh",marginTop:"20px", fontWeight:"600", }}> {title} </Typography>
            <form>
                <SearchIcon sx={{marginRight:'30px', marginLeft:'30px',marginTop:'9px', }} />
                <TextField p={3}
                    sx={{width:'50%', fontSize:'1.1rem',marginRight:'40px'}}
                    placeholder={placeholder}
                    label="searchValue"
                    name="searchValue"
                    variant="standard"
                    onChange={onChange}
                    value={searchValue}
                            />
                <CommonButton 
                    disabled={!getting}
                    size='large'
                    variant = 'contained'
                >
                    Search
                </CommonButton>
            </form>
        </Box>
    )
}export default SearchBar