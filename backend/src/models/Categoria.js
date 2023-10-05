import {Schema, model} from 'mongoose';

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
});

export default model('Categoria', categoriaSchema);