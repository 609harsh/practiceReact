const express=require('express');
const router=express.Router();
const {register,login}=require('../controllers/auth')
const {userData}=require('../controllers/userData');
const {messageData}=require('../controllers/messageData');

router.post('/login',login);
router.post('/register',register);
router.get('/v1/:email',userData);
router.post('/message',messageData);
module.exports=router;