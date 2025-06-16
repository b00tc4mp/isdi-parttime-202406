import mongoose from 'mongoose'; 

// Crear un esquema para el evento
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100, // Máximo 100 caracteres
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // Duración en minutos (puedes cambiar a otro formato si es necesario)
    default: null, // Campo no requerido
  },
  color: {
    type: String, // Color en formato HEX, RGB o nombre de color
    default: null, // Campo no requerido
    //match: /^#([0-9A-F]{3}){1,2}$/i, // Validación para color HEX (opcional)
  },
  category: {
    type: String,
    required: true,
    enum: ['Ansiedad', 'Ataque de Pánico', 'Autolesión', 'Otro'], // Relación con la categoría del evento
    default: 'Otro', // Relación por defecto si no se especifica nada
  },
  user: {  // Relación con el modelo User
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,  // Aseguramos que el evento esté vinculado a un usuario
  }
}, {
  timestamps: true, // Añade createdAt y updatedAt automáticamente
});

// Crear el modelo de evento
const Event = mongoose.model('Event', eventSchema);

export default Event;