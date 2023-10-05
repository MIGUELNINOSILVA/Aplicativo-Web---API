import Usuario from "./../models/Usuario.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const newUser = new Usuario({
      nombre,
      apellido,
      email,
      password: await Usuario.encryptPassword(password),
      fecha_registro: Date.now(),
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: 86400, // 24 horas
    });

    res.status(200).json({
      message: "Usuario creado correctamente",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error,
    });
  }
};

export const signIn = async (req, res) => {
  const userFound =await Usuario.findOne({ email: req.body.email });

  if(!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

  const matchPassword = await Usuario.comparePassword(req.body.password, userFound.password);

  if(!matchPassword) return res.status(401).json({ token: null, message: "Contraseña incorrecta" });
  
  const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
    expiresIn: 86400, // 24 horas
  });
  console.log();
  res.json({
    token
  })
};
