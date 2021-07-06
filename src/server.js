import express from 'express'

const app = express();

// Router
import IndexRoutes from './routes/index.routes'

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use(IndexRoutes);


export default app;
