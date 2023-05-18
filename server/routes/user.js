const router = require('express').Router();
const user = require('./../controllers/user');
router.post('/signin',user.signin);
router.get('/signin',(req,res)=>{
    res.send('jsnd');
})

module.exports = router;