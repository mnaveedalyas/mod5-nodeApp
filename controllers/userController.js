'use strict';

var model = require('../models');

//retrieve list of users
exports.getUsers = (req, res) => {
    console.log("userController -> getUsers ");
    let userList = model.Users.getUsers().slice();
    res.send(userList);
    console.log("userController -> getUsers -> userList length:"+userList.length);
    console.log("--------------------------- ");
};
//retrieve a user based on its id
exports.getUserById = (req, res) => {
    let error_msg = "";
    //verify input id
    console.log("userController -> getUserById -> req.param.id: "+ req.params.id);

    if (typeof req.params.id != 'undefined'){
        //calling Users method to access user info
        let user = model.Users.getUserById(req.params.id); 
        if ( !user || typeof user == 'undefined' ){
            console.log(`Failure, message: Data not found,  errors: ${error_msg}`);
            res.status(404).json({
                response: 'failure',
                message: 'Data not found',
                errors: error_msg
            });
        }else{
            res.status(200).send(user);
        }
    }else{
        error_msg ="wrong input parameter";
        console.log(`Failure, message: Data not found,  errors: ${error_msg}`);
        res.status(404).json({
            response: 'failure',
            message: 'Data not found',
            errors: error_msg
        });
    }
    console.log("--------------------------- ");
};
/*
{
    "name": "Dairy 13",
    "tel": "032342242323",
    "email": "sales@dairysolutionz.co.nz",
    "services": ["service1", "service2", "service3"]
}
*/
//adding new user in list/db
exports.addUser = (req, res) => {  
    console.log("userController -> addUser ");
    //calling model method to add user
    let responseMsg = model.Users.addUser(req.body);
    if (typeof responseMsg == 'undefined'){
        responseMsg = {
            processStatus: 'failure',
            httpResCode: 203,
            message: 'Technical Problem',
            errorMsg: 'Technical Problem',
            id: ''
        };
    }
    // returning response
    res.status(responseMsg.httpResCode).json({
        response: responseMsg.processStatus,
        message: responseMsg.message,
        errors: responseMsg.errorMsg,
        id: responseMsg.id
    });
    console.log("--------------------------- ");
};

//Update user data
exports.updateUser = (req, res) => {  
    console.log("userController -> updateUser -> req.param.id: "+ req.params.id);
    //Calling model method to update and getting response obj
    let responseMsg = model.Users.updateUser(req.params.id, req.body); 
    if (typeof responseMsg == 'undefined'){
        responseMsg = {
            processStatus: 'failure',
            httpResCode: 203,
            message: 'Technical Problem',
            errorMsg: 'Technical Problem',
            id: ''
        };
    }
    // returning response
    res.status(responseMsg.httpResCode).json({
        response: responseMsg.processStatus,
        message: responseMsg.message,
        errors: responseMsg.errorMsg,
        id: responseMsg.id
    });
    console.log("--------------------------- ");
};

//delete user method 
exports.deleteUser = (req, res) => {
    console.log("userController -> deleteUser -> req.param.id: "+ req.params.id);
    let responseMsg = model.Users.deleteUser(req.params.id);
    if (typeof responseMsg == 'undefined'){
        responseMsg = {
            processStatus: 'failure',
            httpResCode: 203,
            message: 'Technical Problem',
            errorMsg: 'Technical Problem',
            id: ''
        };
    }
    // returning response
    
    res.status(responseMsg.httpResCode).json({
        response: responseMsg.processStatus,
        message: responseMsg.message,
        errors: responseMsg.errorMsg,
        id: responseMsg.id
    });
    console.log("--------------------------- ");
    
};