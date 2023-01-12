// ./src/server/db/dbrepo.js
'use strict';
const userDB = [];

exports.getDBUsers = () => {
    console.log("userDBService -> getUsers ");
    return userDB;
}

exports.getDBUserById = (userId) => {
    console.log("userDBService -> getDBUserById -> userId: "+ userId);
    if (typeof userId != 'undefined'){
        return userDB.find(cntr => cntr.id === userId);
    }else{
        return;
    }
}

exports.addDBUser = (user) => {  
    console.log("userDBService -> addDBUser ");
    if (!user || typeof user.id == 'undefined' || user.id.length == 0){
        console.log("wrong data: User ID must not be empty!");
    }else{
        userDB.push(user);
        return(true);
    }
    return false;
};

exports.updateDBUser = (userid, user) => {
    console.log("userDBService -> updateDBUser -> userId: "+ userid);
    let indexOfObject = userDB.map( function(cntr) { return cntr.id}).indexOf(userid);
    if (indexOfObject > -1){
        userDB.splice(indexOfObject, 1, user);
        return(true);
    }else{
        console.log("Problem in updating user info. Try again");
    }
    return false; 
}

exports.deleteDBUser = (userId) => {
    console.log("userDBService -> getDBUserById -> userId: "+ userId);
    let indexOfObject = userDB.map( function(cntr) { return cntr.id}).indexOf(userId);
    if (indexOfObject > -1){
        userDB.splice(indexOfObject, 1);
        return (true);
    }else{
        console.log("Problem in user deletion. Try again");
    }
    return false;
}

