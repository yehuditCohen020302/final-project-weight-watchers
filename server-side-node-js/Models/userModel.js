const { type } = require("express/lib/response");
const { MongoCredentials } = require("mongodb");
const  Meeting = require('./meetingModel');
const Diary = require('./diaryModel');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        min: 3
    },
    street: {
        type: String,
    },
    number: {
        type: Number,
        min: 1
    }
})


const userSchema = new mongoose.Schema({
    // id:{
    //     type: String,
    // },
    details: {
        type: Object,
        firstName: {
            type: String,
            required: true,
            minlength: 5
        },
        lastName: {
            type: String,
            required: true,
            minlength: 5
        },
        address: { type: [addressSchema] },
        phone: {
            type: String,
            minlength: 9
        },
        emailAddress: {
            type: String,
            unique: true,
            required: true

        },
        hight: {
            type: Number,
            required: true,
            min: 5
        } 
        ,
        meeting: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Meeting"
                },
                weight: {
                    type: Number
                }
            }]
    },
    diary:[
        {  
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Diary"
            }
        }]
}, { timestamps: true })


//userSchama.set('toJSON', { virtuals: true })

module.exports = mongoose.model('user', userSchema)
