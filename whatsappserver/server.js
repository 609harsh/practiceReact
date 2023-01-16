require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();

const connectDB=require('./db/connect');
const authRouter=require('./routes/auth')

app.use(express.json());
app.use(cors());







app.get('/',(req,res)=>{
  res.send(`<h1>Sever for WhatsApp based Chat Application </h1>`)
})
app.use('/api',authRouter);




const port=process.env.PORT||5002;

const start=async()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    app.listen(port,()=>{
      console.log(`Server is listening on port ${port}`);
    })
  }
  catch(error){
    console.log(error)
  }
}

start()