
const logger = require('../Log/logger');
const userService =require ('../Services/userService');
const diaryService =require ('../Services/diaryService');
const userModel=require('../Models/userModel')
const diaryModel = require('../Models/diaryModel')
const meetingModel = require('../Models/meetingModel')
const {ObjectId}=require('mongodb');


module.exports.getAllUsers=async (req,res, next)=>{
    try{
        const toGet = await userService.getAllUsers();
        return res.status(200).json(toGet);
    }
    catch (error) {
        next(error)
    }
}

module.exports.getOneUser=async function(req,res, next){
    try{
        
        const _id = req.params._id;
        // const email= req.params.email;
        const user= await userService.getOneUser(_id);
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.updateUser=async function(req,res, next){
    try{
        const _id =(req.params._id);
   
        const {firstName,lastName,city,street,houseNumber,phoneNumber,emailAddress,height,weightsHistory,diary}=req.body;
        const _user= {$set:{
            _id,
            firstName,
            lastName,
            city,
            street,
            houseNumber,
            phoneNumber,
            emailAddress,
            height,
             weightsHistory,
             diary
        }}
        const user= await userService.updateUser(_id, _user);
        res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.deleteUser=async function(req,res, next){
    try{
        const _id = req.params._id;
        const user= await userService.deleteUser(_id);
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.addNewUser=async function(req,res, next){
    try{
        debugger
    const {firstName,lastName,city,street,houseNumber,phoneNumber,emailAddress,height}=req.body;
        const _diary=new diaryModel()
        const diary=await diaryService.addNewDiary(_diary)
        const weightsHistory=[];
        let _user= new userModel(
            { firstName,
            lastName,
            city,
            street,
            houseNumber,
            phoneNumber,
            emailAddress,
            height,
            diary,
            weightsHistory}
        );   
        // _user.firstName=firstName;
        // _user.lastName=lastName;
        // _user.city=city;
        // _user.street=street;
        // _user.houseNumber=houseNumber;
        // _user.phoneNumber=phoneNumber;
        // _user.emailAddress=emailAddress;
        // _user.height=height;
        // _user.diary=diary;
        // _user.weightsHistory=weightsHistory; 
        debugger   
        const user= await userService.addNewUser(_user);
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}