const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
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
    enum: ['manager', 'admin', 'employee', 'teacher', 'student', 'parent'],
    default: 'student',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
