const mongoose = require('mongoose');

// Crear un esquema para las categorías
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Ansiedad', 'Pánico', 'Autolesión', 'Bajón', 'Ralladas', 'Llorería'], // Lista predefinida
    unique: true, // Asegura que no se repitan categorías
    trim: true,
  },
}, {
  timestamps: true, // Añade createdAt y updatedAt automáticamente
});

// Crear el modelo de categoría
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;