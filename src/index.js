const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const ServerConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidator');
// const User = require('./schema/userSchema')

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users',userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth', authRouter);

app.get('/ping',isLoggedIn,(req,res) => {
    //controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message: "pong"})
})

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