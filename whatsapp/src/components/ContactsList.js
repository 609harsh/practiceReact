import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box,Typography } from '@mui/material';



const ContactsList=({id,setdisplayChat,content})=> {
  
  const displayContent=()=>{
    setdisplayChat(id);
  }

  return (
    <Box sx={{display:'flex' ,alignItems:"center",gap:'10px',height:'70px',}} onClick={displayContent}  >
      <AccountCircleIcon sx={{fontSize:'60px'}}/>
      <Box display='flex' flexDirection="column" sx={{width:'1',marginRight:'12px',borderBottom:'solid 0.5px lightGray'}}>
        <Box sx={{display:'grid' ,gridTemplateColumns:'5fr 1fr',alignItems:'center'}} >
          <Typography variant="subtitle1" gutterBottom>{content.name}</Typography>
          <Typography variant="body2" gutterBottom color="red" sx={{justifySelf:'center' ,color:'#646464'}} >yesterday</Typography>
        </Box>
        <Box sx={{display:'grid' ,gridTemplateColumns:'5fr 1fr',alignItems:'center'}} >
          <Typography variant="body2" gutterBottom sx={{color:'#646464'}}>{content.other}:Thank you abhi</Typography>
          <Box sx={{height:'0.9rem',width:'0.9rem',
          backgroundColor:'#2ECC40',color :'white', 
          borderRadius:'50%',justifySelf:'center',
          fontSize:'0.8rem',fontWeight:"600",
          padding:'0.2rem 0.3rem 0.2rem 0.3rem',display:'flex',
          alignItems:'center',justifyContent:'center',
          }} >14</Box>
        </Box>        
      </Box>
    </Box>
  )
}

export default ContactsList