const express=require('express')
const data=require('../model/userData');
const Auth=require('../model/auth');

const userData=async(req,res)=>{
  console.log(req.params)
  const {email}=req.params;
  if(!email){
    res.status(400).json({msg:'Invalid email'});
    return ;
  }
  const find=await Auth.findOne({email:email})
  if(!find){
    res.status(400).json({msg:'No such email exist'});
    return ;
  }
  const findData=await data.findOne({email});
  console.log(findData);
  if(!findData){
    const chat=new data({
      name:find.name,
      email:find.email,
      profilePhoto:null,
      contactList:[
        {
          profilePhoto:null,
          heading:"harsh",
          time:'123456',
          subHeading:'main ghar jaa raha hoo',
          notifications:'14',
          chatData:[
            {
              msg:'Kaise ho aap',
              msgSender:'main nahi hoon',
              msgTime:'1234'
            }
          ],
          noOfParticipants:null,
          room:null
        }
      ]
    })
    await  chat.save()
    .then(response=>{
      console.log(chat);
      res.status(200).json({msg:response});
    })
    .catch(err=>{
      console.log(err);
      res.status(400).json({msg:err});
    })
  }
  
}

module.exports={
  userData
}