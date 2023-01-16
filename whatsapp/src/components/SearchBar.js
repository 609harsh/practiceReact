import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList'
import {TextField,Box,InputAdornment} from '@mui/material';    


function SearchBar() {
  return (
    <Box sx={{ display:'grid', gridTemplateColumns:'5fr 1fr',alignItems:'center', borderBottom:'solid 0.5px lightGray'}}>
        <TextField fullWidth
        id="input-with-icon-textfield"
        InputProps={{
            startAdornment: (
            <InputAdornment position='start'>
                <SearchIcon />
            </InputAdornment>
            ),
            disableUnderline: true,
        }}
        variant="standard"
        placeholder='Search or start a new chat'
        size='normal'
        sx={{gridColumn:'1/2', justifySelf:'center', marginLeft:'5%' ,backgroundColor:'#EEEEEE',}}
        />
        <FilterListIcon sx={{justifySelf:'center'}}/>
    </Box>
    )
}

export default SearchBar