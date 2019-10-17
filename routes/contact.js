var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');



/* GET home page. */
router.post('/insertContact', function(req, res, next) {

var contact = new Contact(req.body)

console.log('hi');
Contact.find({phoneNumber:req.body.phoneNumber},function(err,data){
    if(err){
        res.json(err);
    }
    if(data.length==0){
        contact.save((err,data)=>{
            if (err) {
              console.log('hi1');
              res.send(err);
            } else {
             return res.json({message:"contact inserted"})
             
            }
          })
    }
    if(data.length>0){
        return res.json({'message':'Alreday a user existed with this Phonenumber'})
    }
})


});




router.get('/getContact', function(req, res,){
    
    Contact.find({},function (err,data){
        
        if (err) {
         
            res.json({err});
          }
          else{
              res.json(data);
            
              
          }
    });

});
  


router.put('/editContact', function(req ,res ,next){
    console.log('request',req.body);
    Contact.update({_id:req.body._id}, req.body ,{new:true},function (err,data){
        if(err){
            res.json(err);
        }
        else{
            console.log(data)
            res.json(data);
        }
    });
});



router.delete('/deleteContact/:id',function(req,res ,next){
Contact.deleteOne({_id:req.params.id},function(err,data){
    if(err){
        res.json(err);
    }
    else
    res.json(data);
})
    });
module.exports = router;
