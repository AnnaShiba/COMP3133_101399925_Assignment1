const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100, unique: true },
    gender: { type: String, maxlength: 50 },
    designation: { type: String, required: true, maxlength: 100 },
    salary: { type: Number, required: true, min: 1000 },
    date_of_joining: { type: Date, required: true, default: Date.now},
    department: { type: String, required: true, maxlength: 100 },
    employee_photo: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", employeeSchema);