import React, { useEffect,useState } from 'react'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/material';
import Pusher from 'pusher-js';
import axios from 'axios';


function Chat({emojiState,fileState,emojiIcon,content}) {
  const [input,setInput]=useState('');
  const [send,setSend]=useState('false');
  const [chats,setChats]=useState([]);
  let contentshow={
    name:"harsh",
    room:200,
    other:'hello'
    
  }
  useEffect(()=>{
    if(emojiIcon!==null)
    setInput(input+emojiIcon.icon);
  },[emojiIcon]);
  
  useEffect(()=>{
    const pusher = new Pusher("8e34656d581d30a1ac8b", {
      cluster: "ap2",
      encrypted: true
    });
    const channel = pusher.subscribe(content.room);
    channel.bind('message', data => {
      setChats({ chats: [...chats, data], test: '' });
    });
    inputDetails = inputDetails.bind(this);
  },[])

  const inputDetails=async (e)=>{
    if(e.keyCode===13||send){
      const payload={
        username: content.name,
        message: input,
        room:contentshow.room
      };
      await axios.post('http://localhost:5002/api/message', payload)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
      setSend(false);
    }
    else{
      setInput(e.target.value);
    }   
  }
  
  return (
    
    <Box sx={{backgroundColor:'#E9E9E9',display:'grid', gridTemplateColumns:'1fr 1fr 16fr 1fr',justifyItems:'center',alignItems:'center', padding:'0.5rem',}}>
      <SentimentSatisfiedOutlinedIcon sx={{fontSize:'1.8em' ,justifySelf:'right',}} onClick={emojiState}/>     
      <AttachFileIcon sx={{transform:'rotate(-45deg)'}} onClick={fileState}/>
      <TextField id="outlined-basic" variant="outlined"  size='small' fullWidth placeholder='Type a message' value={input} sx={{backgroundColor:'#FFFFFF'}} onChange={inputDetails} onKeyDown={inputDetails}/>
      {input===''?<MicIcon/>:<SendIcon onClick={setSend(true)}/>}
    </Box>
  )
}

export default Chat;