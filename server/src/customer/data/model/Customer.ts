import mongoose, { Schema, Document } from 'mongoose';

export interface Customer extends Document {
  name: string;
  email: string;
  civicDID: string;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema: Schema<Customer> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    civicDID: { type: String, required: true }
  },
  { timestamps: true } 
);

export const CustomerModel = mongoose.model<Customer>('Customer', CustomerSchema);