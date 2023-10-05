import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";

export const verifyTokenUser = async(req, res)=>{
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).json({ message: "Token no proporcionado" });
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token no válido" });
      }

      const user = await Usuario.findById(decoded.id, { password: 0 });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json({ user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al verificar el token",
      error,
    });
  }
}