var MicroblogRepository = require('../repository/MicroblogRepository');


var findAllUSer = function(request,response){

    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.email);

    var callBack = function(err,persons){
        for(var i in persons){
            console.log(persons[i]);
        }
        response.write(JSON.stringify(persons));
        response.end();
    }

    MicroblogRepository.findAllUSer(callBack);
};

var findAllMessage = function(request,response){

    var callBack = function(err,massage){
        for(var i in massage){
            console.log(massage[i]);
        }
        response.write(JSON.stringify(massage));
        response.end();
    }

    MicroblogRepository.findAllMessage(callBack);
};

var saveMessage = function(request,response){

    var data = request.body;
    console.log(data);
    var callBack = function(error){
        if(error)
        {
            response.write('{"status":"fail"}');
            response.end();
        }else{
            response.write('{"status":"successful"}');
            response.end();
        }
    }
    MicroblogRepository.saveMessage(data,callBack);

}


exports.findAllUSer = findAllUSer;
exports.findAllMessage = findAllMessage;
exports.saveMessage = saveMessage;