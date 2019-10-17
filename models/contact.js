
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/contact',{useNewUrlParser:true});


//var gender =new enum ['Male','Female']
const contactSchema = new mongoose.Schema({
  firstName : String,
  lastName: String,
  phoneNumber: Number,
  gender: String,
  checkMe:{type:Boolean,default:false},
  

},{versionKey: false});

module.exports = mongoose.model('contact', contactSchema);






