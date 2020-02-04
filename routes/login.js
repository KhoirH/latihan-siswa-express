var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('login/index', { title: 'Expres' });
});


var Users = require('../model/users');
/** POST check login */
router.post('/', function(req, res){
  const { body } = req;  
  Users.authLogin(body, function(err,result){
    try{
      res.send({
        result, 
        error: err
      })  
    }catch(e){
      res.send({
        result, 
        error: e
      })
    }
    
  })
})

module.exports = router;
