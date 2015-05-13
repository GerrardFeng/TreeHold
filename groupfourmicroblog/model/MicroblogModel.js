/**
 * Created by FENGGE on 5/7/2015.
 */
var mongoose = require('mongoose');
var mongodbConfig = require('./mogodbConfig').mongodbConfigs;
var mongodbConfigMap = mongodbConfig();

var mongoosedb = mongoose.createConnection(mongodbConfigMap.db);
// Schema for mongoose find the entity
mongoosedb.on('error',console.error.bind(console,'连接错误:'));
mongoosedb.once('open',function(){
    console.log("Open Successful")
});
var mongooseSchema = new mongoose.Schema({
    //username : {type : String, default : 'Anonymous user'},
    username : {type : String , default : "Anonymous user"},
    create_date : { type: Date, default: Date.now},
    email : {type : String , default : "Anonymously"},
    content : {type : String,default : "Bubbling   oooOOOO~~" },
    topic : {type : String , default : "Generic"},
    title : {type : String , default : "Generic"}
});

var PersonModel = mongoosedb.model('microblog',mongooseSchema);
/*var personEntity = new PersonModel({username:'Krouky' , email:"Krouky@oocl.com"});
 PersonModel.find(function(err,persons){
 for(i in persons){
 console.log(persons[i]);
 }
 mongoosedb.close();
 });*/
console.log("C:\Users\FENGGE\Desktop\ITA\Node.js\Class\nodeJsHomeWork\groupfourmicroblog\repository\User.js")
exports.PersonModel = PersonModel;
exports.close = mongoosedb.close;