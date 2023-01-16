import { useState,useEffect } from 'react';
import { Box, Stack, Divider } from '@mui/material';
import NavBar from './components/NavBar';
import Searchbar from './components/SearchBar';
import Contacts from './components/Contacts';
import Profile from './components/Profile'
import ChatScreen from './components/ChatScreen'
import Chat from './components/Chat';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import axios from 'axios';


function App() {
  const [displayChat,setDisplayChat]=useState(-1);
  const [emoji,setEmoji]=useState(false);
  const [file,setFile]=useState(false);
  const [emojiIcon,setEmojiIcon]=useState(null);
  const [roomDetails,setRoomDetails]=useState({});
  const [userLogin,setUserLogin]=useState(true);
  const [userRegister,setUserRegister]=useState(true);
  const [loginResponse,setLoginResponse]=useState(false);
  const [loginResponseData,setLoginResponseData]=useState();
  const [content,setContent]=useState(null);
  
  const emojiState=()=>{
    console.log(emoji);
    setEmoji(!emoji)
  }
  const fileState=()=>{
    console.log(file);
    setFile(!file);
  }
  useEffect(()=>{
    async function check(){
      console.log("hello");
      if(loginResponse===true){
        
        await axios.get(`http://localhost:5002/api/v1/${loginResponseData.email}`)
        .then(res=>{
          console.log("Hello\n"+res);
          setContent(res.data.msg);
        })
        .catch(err=>{
          console.log("hell"+err);
          setContent(null);
        })
      }
    }
    check();
  },[loginResponse]);
  // console.log(loginResponse);
  return (

    userLogin?
    <Login setUserLogin={setUserLogin} setUserRegister={setUserRegister} setLoginResponse={setLoginResponse} setLoginResponseData={setLoginResponseData}/>
    :
    (userRegister?
    <Register setUserLogin={setUserLogin} setUserRegister={setUserRegister} setLoginResponse={setLoginResponse}/>
      :
    <Box sx={{position:'absolute',top:'2rem',bottom:'2rem',right:'2rem',left:'2rem'}} >
      <Stack direction="col" sx={{height:'100%'}}>
        <Box sx={{height:'100%',display:'grid', gridTemplateRows:'0.7fr 0.5fr 8fr',width:0.3}}> 
          <NavBar roomDetails={setRoomDetails} content={content}/>
          <Searchbar/>
          <Contacts setdisplayChat={setDisplayChat} content={content} roomDetails={roomDetails} />
        </Box>
        <Divider sx={{borderWidth:1}}/>
        <Box sx={{height:'100%',display:'grid',width:0.7,gridTemplateRows:'0.7fr 8fr 0.5fr'}}>
        {
            displayChat===-1?
            <h2>Use Whatsapp for free</h2>
            :<>
            <Profile content={content}/>
            <ChatScreen displayChat={displayChat} emoji={emoji} file={file} setEmojiIcon={setEmojiIcon} content={content}/>
            <Chat emojiState={emojiState} fileState={fileState} emojiIcon={emojiIcon} content={content}/>
            </>
        } 
        </Box>
      </Stack>
    </Box>)
      
  );
}

export default App;
