const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("./controllers/sendMail");



app.get("/" , (req, res) =>{
    res.send("I am a Server............");
});


app.get("/mail" , sendMail);

const start =  async() => {

    try{
        app.listen(PORT , () => {

            console.log(`I am a Live in port no.  ${PORT}` );
        });
    }   
    catch(error) {

    }
};

start();




// mene create kiya hai server apne man se 

// const express = require("express");
// const SendmailTransport = require("nodemailer/lib/sendmail-transport");

// const app = express();
// app.get("/", (req, res) =>{
//     res.send("This is express js ");
// });


// // get request in express js ---->>

// app.get("/raja" , (req, res) =>{
//     res.send("This is about page");
// });



// // JSON Data serve karna 

// app.get("/temp",(req, res) =>{
//     res.send([{

//         id : 1,
//         name: "lakhan",
//         course:"B.Tech",

//     }])
// });


// app.listen(3000, () =>{
//     console.log("listening to the porn no 3000");
// });
