import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3, 
    maxlength: 30, 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EmergencyContact',
    },
  ]
}, {
  timestamps: true, 
});

const User = mongoose.model('User', userSchema);

export default User;
