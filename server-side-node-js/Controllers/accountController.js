const accountService=require('../Services/accountService')
const managerModel = require('../Models/managerModel')

module.exports.login=async function(req, res, next) {
    // Account controller: POST /account/login
    try{
        const emailAddress=req.body.emailAddress;
        const password=req.body.password;
        const manager=await accountService.login(emailAddress,password);
        await res.send(manager);
    }
    catch (error){
        next(error);
    }
}

module.exports.addManager=async function(req,res, next){
    try{
    const {emailAddress,password}=req.body;
        let _manager= new managerModel({
            emailAddress,
            password
        });        
        const manager= await accountService.addManager(_manager);
        await res.send(manager);
    }
    catch (error) {
        next(error)
    }
}
