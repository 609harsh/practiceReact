const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1529243",
  key: "8e34656d581d30a1ac8b",
  secret: "8eb485e1b556b7a746d5",
  cluster: 'ap2',
  encrypted: true
});

const messageData=(req,res)=>{
  const payload = req.body;
  pusher.trigger(req.body.room, 'message', payload);
  res.send(payload);
}

module.exports={
  messageData
}