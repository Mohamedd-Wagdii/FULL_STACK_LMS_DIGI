const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ['employee'],
    default: 'employee',
  },
  nationalId: {
    type: String,
    // required: true,
  },
});



const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
