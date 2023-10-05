import Usuario from './../models/Usuario.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const newUser = new Usuario({
      nombre,
      apellido,
      email,
      password: await Usuario.encryptPassword(password),
      fecha_registro: Date.now()
    });
    await newUser.save();
    res.status(201).json({
      message: 'Usuario creado correctamente',
      newUser
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el usuario',
      error
    })
  }
}

export const signIn = async (req, res) => {
  res.send('signIn');
}