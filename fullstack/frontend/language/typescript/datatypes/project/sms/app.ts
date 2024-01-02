require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log('l====',process.env.TWILIO_SID)
const client = require('twilio')(accountSid, authToken);
const smssender =async (body :any) => {
    let msgOptions ={
      from: process.env.PHONE_NUMBER,
        to: "+919108327928",
        body
    }
        
    
    try{
    const message= await client.messages.create(msgOptions);
    console.log("----555",message);
    }catch(error){
      console.log("----55885");
      console.error(error);
    }
}
smssender('Hello from Node.js App');