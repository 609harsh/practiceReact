import React from 'react'
import ContactsList from './ContactsList'
import { Box } from '@mui/material'


function Contacts({setdisplayChat,content,roomDetails}) {

  const renderContactList=()=>{

    const content2=[...content,roomDetails];
    const array=[];
    for(let i=0;i<content2.length;i++){
      array.push(<ContactsList key={i} id={i} setdisplayChat={setdisplayChat} content={content2[i]}/>);
    }
    return array;
  }
  let contentshow={
    name:"harsh",
    room:'200',
    other:'hello'
  }
  return (
    <Box  style={{overflow:'scroll'}} >
      {/* {
        renderContactList()
      } */}
      <ContactsList key='0' id='1' setdisplayChat={setdisplayChat} content={contentshow}/>
      
    </Box>

  )
}

export default Contacts;