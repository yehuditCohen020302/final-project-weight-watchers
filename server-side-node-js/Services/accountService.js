// const fs= require("fs");
// const dataFromFile= fs.readFileSync('db.json');
// let data=JSON.parse(dataFromFile);
const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
const managerModel=require('../Models/managerModel');

module.exports.login=async(emailAddress,password)=>{
    let manager=await managerModel.findOne({ emailAddress:emailAddress,password:password }).exec();
    return manager;
}

module.exports.addManager=async(add)=>{
    const insertedUser=await add.save();
    return insertedUser;
  }
