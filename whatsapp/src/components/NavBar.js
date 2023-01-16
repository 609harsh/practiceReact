import * as React from 'react';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add'
import  DonutLargeIcon  from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import axios from 'axios';

function NavBar({roomDetails,content}) {
  const getDetails=async()=>{
    let room=window.prompt('Join Room','Room No.');
    let contactName=window.prompt('Contact Name','Anonymous');
    let userName=window.prompt('Your Name','User');
    console.log({room,contactName,userName});
    await axios.post('http://localhost:5002/api/v1/',{room,contactName,userName})
    // Make a post request to server to store details of new contact

    roomDetails({room,contactName,userName});
  }
  return(
    <Box sx={{display:'grid',gridTemplateColumns:'1fr 3fr 2fr',alignItems:'center',backgroundColor:'#EEEEEE'}}>
        {content.profilePhoto===null?'':<AccountCircleIcon sx={{gridColumn:'0/3',justifySelf:'center',fontSize:'3em',backgroundImage:'../profile-pic6.png' }} />}
        <Box></Box>
        <Box gridColumn='3/3' sx={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
            <DonutLargeIcon/>
            <AddIcon onClick={getDetails}/>
            <MoreHorizIcon/>
        </Box>
    </Box>
  )
}
export default NavBar;