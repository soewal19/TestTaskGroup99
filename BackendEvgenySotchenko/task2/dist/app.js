"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const resourceRoutes_1 = __importDefault(require("./routes/resourceRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = __importDefault(require("./swagger/swaggerOptions")); // Импортируйте swaggerDocs
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Swagger setup
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerOptions_1.default));
// Routes
app.use('/api/resources', resourceRoutes_1.default);
// MongoDB connection
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log('\x1b[32m%s\x1b[0m', 'Connected to MongoDB');
})
    .catch((error) => {
    console.error('\x1b[31m%s\x1b[0m', 'Error connecting to MongoDB:', error);
});
exports.default = app;
