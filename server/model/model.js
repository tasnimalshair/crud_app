const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        reqired: true,
        unique: true
    },
    gender: String,
    status: String
})


const UserDB = mongoose.model('userdb', schema);
module.exports = UserDB;