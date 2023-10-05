import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/productos.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/usuario.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;

