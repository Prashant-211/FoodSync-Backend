const express = require('express');
const bodyParser = require('body-parser');

const ServerConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')
// const User = require('./schema/userSchema')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));




app.listen(ServerConfig.PORT,async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...`);

    // const newUser = await User.create({
    //     email:'abc@b.com',
    //     password: '123456',
    //     firstName: 'Jonathan',
    //     lastName:'Majoras',
    //     mobileNumber:'7783123128'
    //});
    // console.log("Created new user");
    // console.log(newUser)
})