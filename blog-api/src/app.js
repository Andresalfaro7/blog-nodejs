import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from "./routes/category.routes.js";
import subcategoryRoutes from "./routes/subcategory.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { registerStaticFiles } from './config/staticFiles.js';


const app = express();

registerStaticFiles(app);
app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/subcategorias', subcategoryRoutes);
app.use('/api/blogs', blogRoutes);

app.use(express.json());

export default app;
