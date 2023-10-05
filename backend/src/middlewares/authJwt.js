import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log(token);
    if (!token)
      return res.status(403).json({ message: "No se proporcionó un token" });
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;

    const user = await Usuario.findById(req.userId, { password: 0 });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};
