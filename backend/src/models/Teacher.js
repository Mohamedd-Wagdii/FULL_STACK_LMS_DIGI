const mongoose = require('mongoose');
const User = require('./User'); // Import the base User model

const teacherSchema = new mongoose.Schema({
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

// Create discriminator using the 'teacher' value for the role field
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
