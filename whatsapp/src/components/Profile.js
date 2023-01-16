import * as React from 'react';
import { Typography,Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function Profile() {
  return(
    <Box sx={{gridTemplateColumns:'1fr 8fr 2fr',display:'grid',alignItems:'center',backgroundColor:'#EEEEEE'}}>
        <AccountCircleIcon sx={{gridColumn:'0/3',justifySelf:'center',fontSize:'3em'}} />
        <Box sx={{gridColumn:'2/3'}}>
          <Typography variant="subtitle1" gutterBottom sx={{marginBottom:'0'}}>Family Lucknow bombay ewale</Typography>
          <Typography variant="body2" gutterBottom sx={{color:'#646464',marginBottom:'0'}}>Parul:Thank you abhi</Typography>
        </Box>
        <Box gridColumn='3/3' sx={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr', justifyItems:'center'}}>
            <VideoCallIcon/>
            <SearchSharpIcon sx={{transform:'rotate(90deg)'}}/>
            <MoreHorizIcon/>
        </Box>
    </Box>
  )


}
export default Profile;