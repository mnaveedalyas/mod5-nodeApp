
'use strict';
const userService = require('../services/userDBService');
//const randomBytes = require('crypto');

//retrive list of users 
exports.getUsers =() =>  {
    console.log("userModel -> getUsers ");
    return userService.getDBUsers();
}

// retrive a single object of user
exports.getUserById = (id) => {
    console.log("userModel -> getUserById -> id: "+ id);
    return userService.getDBUserById(id)
}


//add new user
exports.addUser = (payload) => {  
    console.log("userModel -> addUser ");
    let errorMsg="";
    let success = false;
    let user = {};
    if (!payload || typeof payload.name == 'undefined' || payload.name.length == 0){
        errorMsg="wrong data: user Name must not be empty!"
    }else{
        //user.id = randomBytes(16).toString("hex");
        if (typeof payload.id != 'undefined')
            user.id = payload.id.trim();
        else
            user.id = '';

        if (typeof payload.name != 'undefined')
            user.name = payload.name.trim();
        else
            user.name = '';
        if (typeof payload.tel != 'undefined')
            user.tel = payload.tel.trim();
        else   
            user.tel = '';
        if (typeof payload.email != 'undefined')
            user.email = payload.email.trim();
        else
            user.email ='';
        
        success = userService.addDBUser(user);
        
    }
    return getResponseObj(
        success? 'success': 'failure',
        success? 201 : 203,
        success? 'Data is added' : 'Problem in adding data',
        errorMsg,
        user.id
    );
}

exports.updateUser = (userId, payload) => {
    console.log("userModel -> updateUser -> userId: "+ userId);
    let success = false;
    let errorMsg='';
    
    if (typeof payload != 'undefined' && typeof userId != 'undefined'){

        let user =  this.getUserById(userId);
        if ( !user || typeof user == 'undefined'){
            errorMsg = "Unable to find existing data of user";
        }else{
            //updating existing information with new one 
            if (typeof payload.name != 'undefined')
                user.name = payload.name.trim();
            if (typeof payload.tel != 'undefined')
                user.tel = payload.tel.trim();
            if (typeof payload.email != 'undefined')
                user.email = payload.email.trim();
            success = userService.updateDBUser(userId, user)
        }
    }else{
        errorMsg = 'Invalid inputs';
    }

    return getResponseObj(
        success? 'success': 'failure',
        success? 202 : 203,
        success? 'Data is Updated' : 'Problem in updating data',
        errorMsg,
        userId
    );
    
}

exports.deleteUser = (userId) => {
    console.log("userModel -> deleteUser -> userId: "+ userId);
    let success = false;
    let errorMsg ='';
    if (typeof userId != 'undefined'){
        //retrieving existing contrainer based on id
        let existingUser =  this.getUserById(userId);
        //validation of user object
        if (!existingUser ||  typeof existingUser == 'undefined'){
            errorMsg = "Data does not exists";
        }else{
            success = userService.deleteDBUser(existingUser.id)
        }
    }else{
        errorMsg = "Object id does not exists in request";
    }

    return getResponseObj(
        success? 'success': 'failure',
        success? 202 : 203,
        success? 'Data is deleted' : 'Problem in deleting data',
        errorMsg,
        userId
    );

}

function getResponseObj(processStatus, httpResCode,  message, errorMsg, ObjId ) {
    let response = {
        processStatus: processStatus,
        httpResCode: httpResCode,
        message: message,
        errorMsg: errorMsg,
        id: ObjId
    };
    console.log('Response: '+ JSON.stringify(response));
    return response;     
}

exports.getResponseObj = getResponseObj;

