// src/app.ts
import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resourceRoutes from './routes/resourceRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger/swaggerOptions'; // Импортируйте swaggerDocs

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/resources', resourceRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log('\x1b[32m%s\x1b[0m', 'Connected to MongoDB');
    })
    .catch((error) => {
        console.error('\x1b[31m%s\x1b[0m', 'Error connecting to MongoDB:', error);
    });

export default app;