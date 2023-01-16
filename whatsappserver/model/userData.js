const mongoose=require('mongoose');



const chatData=mongoose.Schema({
  msg:{
    type:String
  },
  msgSender:{
    type:String
  },
  msgTime:{
    type:String
  }
})

const contactListData=mongoose.Schema({
  profilePhoto:{
    type:String
    // data:Buffer,
    // contentType:String,
  },
  heading:{
    type:String,
  },
  time:{
    type:String
  },
  subHeading:{
    type:String
  },
  notifications:{
    type:String
  },
  chatData:[chatData],
  noOfParticipants:{
    type:Number
  },
  room:{
    type:String
  }
})

const userData=mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  profilePhoto:{
    type:String
    // data:Buffer,
    // contentType:String
  },
  contactList:[contactListData]
})

module.exports = mongoose.model('UserData', userData);