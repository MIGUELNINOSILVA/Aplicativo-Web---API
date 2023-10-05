import { Schema, isValidObjectId, model } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imagenURL: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  creado_por: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  }
});

export default model('Producto', productoSchema);