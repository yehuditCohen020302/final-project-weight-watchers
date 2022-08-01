let mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const Meeting=require('./meetingModel');
 const Diary=require('./diaryModel');

const userSchema = new mongoose.Schema({
    id: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    city: {
        type: String
    },
    street: {
        type: String
    },
    houseNumber: {
        type: Number
    },
    phoneNumber: {
        type: String
    },
    emailAddress: {
        type: String,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    height: {
        type: Number
    },
    weightsHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meeting'
    }],
    diary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    }
}, { timestamps: true })
// userSchema.set("toObject", { virtuals: true })
// userSchema.set("toJSON", { virtuals: true })
module.exports = mongoose.model('User', userSchema)