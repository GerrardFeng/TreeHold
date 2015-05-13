var PersonModel = require('../model/User').PersonModel;
var PersonModelClose = require('../model/User').close;
var MicroblogModel = require('../model/MicroblogModel').MicroblogModel;
var MicroblogModelClose = require('../model/MicroblogModel').close;

/*var findAllUSer = function(request,response){

    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.email);
    PersonModel.find(function(err,persons){
        for(var i in persons){
            console.log(persons[i]);
        }
        PersonModelClose();
        response.write(JSON.stringify(persons));
        response.end();
    })
};*/
var findAllUSer = function(callBack){
    /*PersonModel.find(function(err,persons){
     for(var i in persons){
     console.log(persons[i]);
     }
     PersonModelClose();
     response.write(JSON.stringify(persons));
     response.end();
     });*/

    PersonModel.find(function(err,persons){
        callBack(err,persons);
        PersonModelClose();
    });
    //XXX.find(callbackFunction)Asynchronize
};

var findAllMessage = function(callBack){

/*    MicroblogModel.find(function(err,persons){
        callBack(err,persons);
        MicroblogModelClose();
    });*/
    MicroblogModel.find({}).sort( {'_id':-1} ).exec(function(err,persons){
        callBack(err,persons);
        MicroblogModelClose();
    });
    //MyModel.find({}).sort({'_id':-1}).limit(6).exec(function(err,docs){})

};

var saveMessage = function(data,callBack){
    console.log(data);
    var MicroblogModelEntity = new MicroblogModel(data);
    MicroblogModelEntity.save(function(error){
        callBack(error);
    });
    MicroblogModelClose();
};




exports.findAllUSer = findAllUSer;
exports.findAllMessage = findAllMessage;
exports.saveMessage = saveMessage;