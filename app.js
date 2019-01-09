const express= require('express');
const authRoutes=require('./routes/auth-routes')
const passportSetup=require('./config/passport-setup')
const mongoose = require ('mongoose');
const cookieSession =require('cookie-session');
const passport= require('passport');
const keys = require('./config/keys');
const profileRoutes=require('./routes/profile-routes')
const errorHandler= require('errorhandler')


const app=express();
//set up a view engine
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
//set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);
app.set('view engine','ejs');
app.get('/',(req,res)=>{

res.render('home')

})
mongoose.connect('mongodb://localhost:27017/ninjapassport',{ useNewUrlParser: true } );


mongoose.connection.on('connected', function () {  
    console.log("The connnection to the database was made");
  });


  mongoose.connection.on('error', function () {  
    console.log('was not able to connect to the database');
  });
app.listen(3000,()=>{

console.log("app now listening for requests on port 3000")


});