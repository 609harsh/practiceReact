const express=require('express');
const Auth=require('../model/auth');

const login=async(req,res)=>{
  const {userName,email,password}=req.body;
  const find=await Auth.findOne({email});
  if(!find){
    res.status(400).json({msg:'User does not exist'});
  }
  if(userName!==find.name || password!==find.password){
    res.status(400).json({
      msg:'username or password does not match'
    })
  }
  res.status(200).json({msg:find});

}

const register=async(req,res)=>{
  
  const {userName,email,password}=req.body;
  let duplicate=await Auth.findOne({email:email});
  if(duplicate){
    res.status(400).json({
      msg:'Email already exist'
    })
    return ;
  }
  duplicate=await Auth.findOne({name:userName});
  if(duplicate){
    res.status(400).json({
      msg:'user name exist'
    })
    return ;
  }
  const auth=new Auth({
    name:userName,
    email:email,
    password:password
  });
  
  await auth.save().then(response=>{
    res.status(200).json({msg:response});
  })
  .catch(err=>{
    console.log(err);
    res.status(400).json({msg:err})
  })
}



module.exports={
  login,register
};