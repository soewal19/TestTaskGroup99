"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/swagger/swaggerOptions.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // Версия OpenAPI
        info: {
            title: 'Task API', // Заголовок API
            version: '1.0.0', // Версия API
            description: 'API for managing resources', // Описание API
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL вашего сервера
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Путь к файлам, содержащим аннотации Swagger
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerDocs;
