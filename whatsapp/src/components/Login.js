import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { ButtonGroup } from '@mui/material';
import {useState} from 'react';
import {TextField,InputAdornment,Button,Box} from '@mui/material'
import axios from 'axios'

function Login({setUserLogin,setUserRegister,setLoginResponse,setLoginResponseData}) {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [value,setValue]=useState('');

  const loginDetails=async()=>{
    if(!userName || !email || !password){
      setValue('Empty Fields !!!');
      return;
    }
    if(userName.length<3){
      setValue('UserName too short!!!');
      return ;
    }
    if(password.length<3){
      setValue('Password too short!!!');
      return ;
    }
    
    const details={
      userName,
      email,
      password
    }
    await axios.post('http://localhost:5002/api/login',details)
    .then((res)=>{
      // console.log(res);
      setLoginResponse(true);
      setUserLogin(false);
      setUserRegister(false);
      setLoginResponseData({
        email:res.data.msg.email,
        name:res.data.msg.name,
      });
    })
    .catch((err)=>{
      // console.log(err);
      setLoginResponse(false);
    })
  }
  const registerDetails=async()=>{
    setUserLogin(false);
    setUserRegister(true);
  }
  return (
    <Box sx={{position:'absolute',top:'8rem',bottom:'8rem',right:'12rem',left:'12rem'}}>
      <h3>Login</h3>
      <TextField fullWidth
        // id="input-with-icon-textfield"
        InputProps={{
            startAdornment: (
            <InputAdornment position='start'>
                <PersonIcon/>
            </InputAdornment>
            ),
            disableUnderline: true,
        }}
        variant="standard"
        placeholder='UserName'
        onChange={(e)=>setUserName(e.target.value)}
        />
        <TextField fullWidth
        // id="input-with-icon-textfield"
        InputProps={{
            startAdornment: (
            <InputAdornment position='start'>
                <EmailIcon/>
            </InputAdornment>
            ),
            disableUnderline: true,
        }}
        variant="standard"
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField fullWidth
        id="input-with-icon-textfield"
        InputProps={{
            startAdornment: (
            <InputAdornment position='start'>
                <VpnKeyIcon/>
            </InputAdornment>
            ),
            disableUnderline: true,
        }}
        variant="standard"
        placeholder='Password'
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        {
        value!==''?
        <TextField fullWidth variant="standard" value={value}/>
        :
        ''
        }
        <ButtonGroup >
          <Button variant="contained" onClick={registerDetails}>New User?</Button>
          <Button variant="contained" onClick={loginDetails}>Submit</Button>
        </ButtonGroup>
    </Box>
  )
}

export default Login