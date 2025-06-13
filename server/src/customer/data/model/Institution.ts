import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

interface Customer extends Document {
  _id: ObjectId;
  name: string;
  email: string;          
  civicDID: string;      
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  civicDID: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<Customer>('Customer', CustomerSchema);