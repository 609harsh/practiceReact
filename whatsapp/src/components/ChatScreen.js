import { Box, MenuItem, Menu } from '@mui/material'
import React from 'react'
import './ChatScreen.css'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

function ChatScreen({displayChat,emoji,file,setEmojiIcon,content}) {
  const chatNo=displayChat;
  
  const emojiSelect=(e)=>{
    const emoji={
      num:Math.floor(Math.random() * 10000),
      icon:e.native
    }
    setEmojiIcon(emoji);
  }
  let contentshow={
    name:"harsh",
    room:'200',
    other:'hello'
  }
  return(
    <>

    <Box sx={{overflow:'scroll'}} >        
      <div className="u1 chat">Hey sam, whats up?</div>
      <div className="u2 chat">nothing here how 'bout u?</div>
      <div className="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</div>
      <div className="u1 chat">driveing through mcdonalds right now</div>
      <div className="u2 chat">cool! where exactly will you be?</div>
      <div className="u1 chat">up in the ridgway, mt. horab area</div>
      <div className="u1 chat">Hey sam, whats up?</div>
      <div className="u2 chat">nothing here how 'bout u?</div>
      <div className="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</div>
      <div className="u1 chat">driveing through mcdonalds right now</div>
      <div className="u2 chat">cool! where exactly will you be?</div>
      <div className="u1 chat">up in the ridgway, mt. horab area</div>
      <div className="u1 chat">Hey sam, whats up?</div>
      <div className="u2 chat">nothing here how 'bout u?</div>
      <div className="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</div>
      <div className="u1 chat">driveing through mcdonalds right now</div>
      <div className="u2 chat">cool! where exactly will you be?</div>
      {/* {
      emoji?
      <Picker data={data} onEmojiSelect={emojiSelect} />:''
      } */}
    </Box>
    
    {/* {
      file?
      <Menu>
        <MenuItem>
          <CameraAltIcon/>
        </MenuItem>
        <MenuItem>
          <CollectionsIcon/>
        </MenuItem>
        <MenuItem>
          <DescriptionIcon/>
        </MenuItem>
        <MenuItem>
        <PersonIcon/>
        </MenuItem>
      </Menu>
      :''
    } */}
    
    </>
  )
}

export default ChatScreen;