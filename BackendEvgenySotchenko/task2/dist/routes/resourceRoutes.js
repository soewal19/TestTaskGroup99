"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/resourceRoutes.ts
const express_1 = __importDefault(require("express"));
const resourceController_1 = __importDefault(require("../controllers/resourceController"));
const router = express_1.default.Router();
/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resource created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', resourceController_1.default.createResource);
/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: List resources
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: List of resources
 */
router.get('/', resourceController_1.default.listResources);
/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Get a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The resource ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resource details
 *       404:
 *         description: Resource not found
 */
router.get('/:id', resourceController_1.default.getResource);
/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Update a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The resource ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *       404:
 *         description: Resource not found
 */
router.put('/:id', resourceController_1.default.updateResource);
/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Delete a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The resource ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Resource deleted successfully
 *       404:
 *         description: Resource not found
 */
router.delete('/:id', resourceController_1.default.deleteResource);
exports.default = router;
