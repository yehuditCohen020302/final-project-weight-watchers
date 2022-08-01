const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
const diaryModel=require('../Models/diaryModel');
const userModel=require('../Models/userModel');

module.exports.getUsersDiary=async (userId)=>{
    const uid=ObjectId(userId);
    const user = await userModel.findById(uid);
    return user.diary;
}

module.exports.addNewDaySummary=async (userId, summary)=>{
    let users = await Array.from(data.users);
    let user=users.find(user=>user.id === userId);
    users = users.filter(user => user.id != userId);
    user.diary.days.push(summary);
    users.push(user);
    // 'manager': manager,
    const json =  JSON.stringify({'users':users })
    data.users = users;
    // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
    //     if (err) return console.log(err);
    //   })
    // await fs.writeFileSync('db.json', json);
    return `update user's diary, now the all users: ${JSON.stringify(data.users)}`;
}

module.exports.updateDaySummary=async (userId,dayId,newDaySummary)=> {
    let users = await Array.from(data.users);
    let user=users.find(user=>user.id === userId);
    users = users.filter(user => user.id != userId);
    user.diary.days=user.diary.days.filter(day=>day.date!=dayId);
    user.diary.days.push(newDaySummary);
    users.push(user);
    // 'manager': manager,
    const json =  JSON.stringify({'users':users })
    data.users = users;
    // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
    //     if (err) return console.log(err);
    //   })
    // await fs.writeFileSync('db.json', json);
    return `update the day summery of the user ${userId}, now the all users: ${JSON.stringify(data.users)}`;
}

module.exports.removeDaySummary=async (userId,dayId)=> {
    let users = await Array.from(data.users);
    let user=users.find(user=>user.id === userId);
    users = users.filter(user => user.id != userId);
    user.diary.days=user.diary.days.filter(day=>day.date!=dayId);
    users.push(user);
    // 'manager': manager,
    const json =  JSON.stringify({'users':users })
    data.users = users;
    // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
    //     if (err) return console.log(err);
    //   })
    // await fs.writeFileSync('db.json', json);
    return `deleted user day summary, now the users are : ${JSON.stringify(data.users)}`;
}

module.exports.addNewDiary = async (diaryToAdd)=>{
    const addedDiary=await diaryToAdd.save();
    return addedDiary;
}