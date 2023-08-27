const nodemailer = require("nodemailer");

const sendMail = async (req, res)=>{
    let testAccount = await nodemailer.createTestAccount();
   

    // connect with the SMTP server 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jamel.ryan@ethereal.email',
            pass: 'R8rK4ERGRnR4jtgq46'
        }
    });

     // email kisko likhna hai 
     
     const info = await transporter.sendMail({
        from: '" XML Part 👻" <rakesh@gmail.com>', 
        to: "choudharyyofficial@gmail.com", // list of receivers
        subject: "This is Choudharyy email  ", // Subject line
        text: "Hello My Node.js Tutorials..... ", // plain text body
        html: "<b> This is my bold And plain Text </b>", // html body
      });

      console.log("message sent : %s", info.messageId);


    res.json(info);
};


module.exports = sendMail;