import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api/usuarios', userRoutes);

export default app;
