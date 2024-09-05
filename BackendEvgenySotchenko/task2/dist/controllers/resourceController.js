"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resourceModel_1 = __importDefault(require("../models/resourceModel"));
const resourceController = {
    // Create a new resource
    createResource: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, description } = req.body;
            // Validate request body
            if (!name || !description) {
                return res.status(400).json({ error: 'Name and description are required.' });
            }
            const newResource = new resourceModel_1.default({ name, description });
            yield newResource.save();
            res.status(201).json(newResource);
        }
        catch (error) {
            console.error('Error creating resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    // List resources with optional filters
    listResources: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name } = req.query;
            const filter = {};
            if (name) {
                filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
            }
            const resources = yield resourceModel_1.default.find(filter);
            res.status(200).json(resources);
        }
        catch (error) {
            console.error('Error listing resources:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    // Get details of a specific resource
    getResource: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const resource = yield resourceModel_1.default.findById(id);
            if (!resource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }
            res.status(200).json(resource);
        }
        catch (error) {
            console.error('Error getting resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    // Update resource details
    updateResource: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const updatedResource = yield resourceModel_1.default.findByIdAndUpdate(id, { name, description, updatedAt: new Date() }, { new: true } // Return the updated document
            );
            if (!updatedResource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }
            res.status(200).json(updatedResource);
        }
        catch (error) {
            console.error('Error updating resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    // Delete a resource
    deleteResource: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deletedResource = yield resourceModel_1.default.findByIdAndDelete(id);
            if (!deletedResource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }
            res.status(204).send(); // No content
        }
        catch (error) {
            console.error('Error deleting resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    })
};
exports.default = resourceController;
//******************Programm Logic Description******************************
/*
createResource:
Validates the incoming request body to ensure both name and description are provided.
Creates a new resource using the Resource model and saves it to the database.
Returns a 201 status code and the created resource.
listResources:
Accepts optional query parameters for filtering resources.
If a name query parameter is provided, it performs a case-insensitive search using a regular expression.
Retrieves all matching resources from the database and returns them with a 200 status code.
getResource:
Retrieves a specific resource by its ID from the URL parameters.
If the resource is not found, it returns a 404 status code.
If found, it returns the resource with a 200 status code.
updateResource:
Updates an existing resource based on the ID from the URL parameters.
The request body can contain updated values for name and description.
If the resource is found and updated, it returns the updated resource with a 200 status code.
If not found, it returns a 404 status code.
deleteResource:
Deletes a resource by its ID from the URL parameters.
If the resource is successfully deleted, it returns a 204 status code (No Content).
If not found, it returns a 404 status code.

 */ 
