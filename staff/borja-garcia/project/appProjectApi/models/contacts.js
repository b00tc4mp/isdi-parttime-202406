import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema({
  contactName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^(\+34|0034|34)?[6789]\d{8}$/, // Regex simplificado y corregido
  },
  relationship: {
    type: String,
    trim: true,
    enum: ['Familiar', 'Amigo', 'Pareja', 'Personal Médico', 'Otro'],
    default: 'Otro',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('EmergencyContact', emergencyContactSchema);