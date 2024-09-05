// @types/swagger-jsdoc.d.ts
declare module 'swagger-jsdoc' {
    interface SwaggerDefinition {
        openapi: string;
        info: {
            title: string;
            version: string;
            description?: string;
        };
        servers?: Array<{ url: string }>;
    }

    interface SwaggerOptions {
        definition: SwaggerDefinition;
        apis: string[];
    }

    export default function swaggerJsDoc(options: SwaggerOptions): any;
}