import React from 'react'
import {useState} from 'react'
import {TextField,InputAdornment,Button,Box,ButtonGroup} from '@mui/material'
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Register({setUserLogin,setUserRegister,setLoginResponse}) {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [value,setValue]=useState('');



  const registerDetails=async()=>{
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
    await axios.post('http://localhost:5002/api/register',details)
    .then((res)=>{
      console.log("Heaven")
      console.log(res);
      setLoginResponse(res.data.msg);
      setUserLogin(false);
      setUserRegister(false);
    })
    .catch((err)=>{
      console.log("Hell");
      
      console.log(err);
      setLoginResponse(null);
    })
  }
  const loginDetails=()=>{
    setUserLogin(true);
    setUserRegister(false);
  }
  return (
    <Box sx={{position:'absolute',top:'8rem',bottom:'8rem',right:'12rem',left:'12rem'}}>
      <h3>Register</h3>
      <TextField fullWidth
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
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        {
        value!==''?
        <TextField fullWidth variant="standard" value={value}/>
        :
        ''
        }
        <ButtonGroup >
          <Button variant="contained" onClick={loginDetails}>Already Member??</Button>
          <Button variant="contained" onClick={registerDetails}>Submit</Button>
        </ButtonGroup>
    </Box>
  )
}

export default Register