const mongoose = require('mongoose');
const Category = require('./models/category'); // Ruta al modelo

mongoose.connect('mongodb://localhost:27017/categoriesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Crear una categoría
const newCategory = new Category({
  name: 'Ansiedad',
});

newCategory.save()
  .then(category => console.log('Categoría creada:', category))
  .catch(err => console.error('Error al crear la categoría:', err));