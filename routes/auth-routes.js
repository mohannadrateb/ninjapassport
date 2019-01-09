express= require('express');
const router= express.Router();
const passport = require('passport');
// auth login
router.get('/login',(req,res)=>{

res.render('login');


});
//auth logout

router.get('/logout',(req,res)=>{

    req.logout();
    res.redirect('/')
    
    });

//auth with google
router.get('/google',passport.authenticate('google',{
 scope:['profile']


}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{

res.render('profile',{user: req.user });

})
module.exports=router;