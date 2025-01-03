const express = require('express');
const bodyParser = require('body-parser');

const ServerConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
// const User = require('./schema/userSchema')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users',userRouter); // connects the router to the server
app.use('/carts', cartRouter);


app.listen(ServerConfig.PORT,async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...`);

    // const newUser = await User.create({
    //     email:'a@b.com',
    //     password: '7123456',
    //     firstName: 'sonathan',
    //     lastName:'Majoras',
    //     mobileNumber:'7983123128'
    // });
    // console.log("Created new user");
    // console.log(newUser)
})

// localhost:5500/users - GET
// localhost:5500/carts/736876235 -GET