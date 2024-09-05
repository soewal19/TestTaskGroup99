// src/swagger/swaggerOptions.ts
import swaggerJsDoc from 'swagger-jsdoc';

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

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;