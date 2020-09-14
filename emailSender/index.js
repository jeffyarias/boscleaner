const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeoutlook = require('nodejs-nodemailer-outlook');


const app = express();

app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const htmlEmail = `<h3>Contact Detail</h3>
//          <ul>
//          <li>Name: </li>
//          <li>Email: </li>
//          <li>Address: </li>
//          <li>Bedrooms: </li>
//          <li>Bathrooms: </li>
//          <li>Fridge: </li>
//          <li>Oven: </li>
//          <li>Price: </li>
//          <li>Date: </li>
//          <li>Time: </li>

     
//          </ul>
         
//          `
         
nodeoutlook.sendEmail({
    service: 'godady',
    auth: {
        user: "contactus@bostonmaids",
        pass: "182177",

    },
    from: "contactus@bostnmaids.com",
    to: "jeffreyarias21@gmail.com",
    subject: "hey you, awesome!",
    html: "<b>This is bold text<b>",
    text: "This is plain text",
    replyTo: "glorysgomez@gmail.com",
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)

    
})     



   


const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>console.log(`Server started on Port ${PORT}`));