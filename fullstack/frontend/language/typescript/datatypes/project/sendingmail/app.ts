let nodemailer=require('nodemailer')
//ccatvgnhjxsbxyof
let middleMan=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'priyankajspriyankajs08@gmail.com',
            pass:'wzoxejbrmkzecanr'
        },
        tls:{
            rejectUnauthorized:false
        }
    }
)

let mailOptions={
    from:'priyankajspriyankajs08@gmail.com',
    to:'Deepzz1120@gmail.com',
    subject:'hlo',
    text:'der?'
}

middleMan.sendMail(mailOptions,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mail sent")
    }
})