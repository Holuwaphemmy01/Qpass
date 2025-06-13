import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface Company extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  civicDID: string;
  address: string;
  state: string;
  city: string;
  qrCodeUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const CompanySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  civicDID: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  industry: { type: String, required: true },
  services: { type: [String], required: true },
  description: { type: String, required: true },
  qrCodeUrl: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const CompanyModel = mongoose.model<Company>('Company', CompanySchema);
