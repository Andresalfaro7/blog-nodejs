import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from "./routes/category.routes.js";
import subcategoryRoutes from "./routes/subcategory.routes.js";

const app = express();

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/subcategorias', subcategoryRoutes);

export default app;
