import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true, // No puede haber dos usuarios con el mismo email
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  fecha_registro: {
    type: Date,
    default: Date.now()
  }
});

usuarioSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

usuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
}

export default model('Usuario', usuarioSchema);
