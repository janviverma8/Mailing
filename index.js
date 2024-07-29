const http = require('http');
const nodemailer = require('nodemailer');
const fs = require('fs');

const mailTransporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 465,
    auth : {
        user : 'vermajanvi179@gmail.com',
        pass : 'wfsefbpokfgexfur'
    }
})

const sendEmail = (toEmail)=>{
    const message = {
        from : 'vermajanvi179@gmail.com',
        to : toEmail,
        subject : 'learning nodemailer at cn',
        html : 'I am learing how to send email using nodejs',
    }

    mailTransporter.sendMail(message,(err,info)=>{})

    fs.appendFile('EmailArchieve.txt',`${toEmail},`,(err)=>{
        if(err){
            console.log(err);
        }
    })
}

const server = http.createServer( (req, res) => {
    console.log(req.url);

    let email = '';

    if(req.url) {
        idxofEqual = req.url.indexOf('=');
        email = req.url.slice(idxofEqual +1,req.url.length);
        sendEmail(email);
    }
    console.log(email);
  
    res.end('Server listen')
})

server.listen(8094,()=>console.log('server strted at port:8094'));