import { Request, Response } from 'express';
import Resource from '../models/resourceModel';

const resourceController = {
    // Create a new resource
    createResource: async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;

            // Validate request body
            if (!name || !description) {
                return res.status(400).json({ error: 'Name and description are required.' });
            }

            const newResource = new Resource({ name, description });
            await newResource.save();

            res.status(201).json(newResource);
        } catch (error) {
            console.error('Error creating resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // List resources with optional filters
    listResources: async (req: Request, res: Response) => {
        try {
            const { name } = req.query;

            const filter: any = {};
            if (name) {
                filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
            }

            const resources = await Resource.find(filter);
            res.status(200).json(resources);
        } catch (error) {
            console.error('Error listing resources:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Get details of a specific resource
    getResource: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const resource = await Resource.findById(id);
            if (!resource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }

            res.status(200).json(resource);
        } catch (error) {
            console.error('Error getting resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Update resource details
    updateResource: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;

            const updatedResource = await Resource.findByIdAndUpdate(
                id,
                { name, description, updatedAt: new Date() },
                { new: true } // Return the updated document
            );

            if (!updatedResource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }

            res.status(200).json(updatedResource);
        } catch (error) {
            console.error('Error updating resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Delete a resource
    deleteResource: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const deletedResource = await Resource.findByIdAndDelete(id);
            if (!deletedResource) {
                return res.status(404).json({ error: 'Resource not found.' });
            }

            res.status(204).send(); // No content
        } catch (error) {
            console.error('Error deleting resource:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

export default resourceController;
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