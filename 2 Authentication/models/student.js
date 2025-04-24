const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    name: { type: String, required: true, trim:true },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    password: { type:String, required: true,trim: true},
},{
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;