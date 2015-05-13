var mongoose = require('mongoose');
var mongodbConfig = require('./mogodbConfig').mongodbConfigs;
var mongodbConfigMap = mongodbConfig();

var targetMongoDBname = mongodbConfigMap.db;
var mongoosedb = mongoose.createConnection(targetMongoDBname);
// Schema for mongoose find the entity
mongoosedb.on('error',console.error.bind(console,'连接错误:'));
mongoosedb.once('open',function(){
    console.log("Open Successful")
});
var mongooseSchema = new mongoose.Schema({
    //username : {type : String, default : 'Anonymous user'},
    username : {type : String},
    email : {type : String}
});

var PersonModel = mongoosedb.model('usercollections',mongooseSchema);
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