import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface Institution extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  civicDID: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  qrCodeUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const InstitutionSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  civicDID: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  qrCodeUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const InstitutionModel = mongoose.model<Institution>('Institution', InstitutionSchema);
