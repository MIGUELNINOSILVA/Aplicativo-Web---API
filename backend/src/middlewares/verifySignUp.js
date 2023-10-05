import Usuario from "../models/Usuario.js";

export const checkDuplicateUsernameOrEmail = async(req, res, next) => {
  try {
    const user = await Usuario.findOne({ email: req.body.email });
    
    if (user) return res.status(400).json({ message: "El usuario ya existe con este correo" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}