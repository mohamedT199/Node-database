const database = require('./database') ;

const validator = require('validator') ; 


const email = 'mohamed@gaber.com' ; 
if(validator.isEmail(email)){
    database.add(email) ;
}
else{
    console.log('that is not a vaild email')
}