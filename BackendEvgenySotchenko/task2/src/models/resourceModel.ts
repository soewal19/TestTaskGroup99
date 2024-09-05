import mongoose, { Schema, Document } from 'mongoose';

interface IResource extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const resourceSchema = new Schema<IResource>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Resource = mongoose.model<IResource>('Resource', resourceSchema);

export default Resource;