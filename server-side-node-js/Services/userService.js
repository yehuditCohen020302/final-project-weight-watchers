const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const userModel = require("../Models/userModel");

(module.exports.getAllUsers = async () => {
  const user = await userModel.find();
  return user;
}),
  (module.exports.getOneUser = async (_id) => {
    const user = await userModel.findOne({ _id: _id });
    // const user = await userModel.findOne({emailAddress:emailAddress});
    return user;
  }),
  (module.exports.updateUser = async (_id, update) => {
    const updateUser = await userModel.updateOne(
      { _id: ObjectId(_id) },
      update
    );
    return updateUser;
  }),
  (module.exports.deleteUser = async (_id) => {
    const user = await userModel.deleteOne({ _id: _id });
    console.log(user);
    return ` delete user ${_id} `;
  }),
  (module.exports.addNewUser = async (add) => {
    debugger;
    const insertedUser = await add.save();
    return insertedUser;
  });
