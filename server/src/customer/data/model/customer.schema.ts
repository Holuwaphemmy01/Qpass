import { ObjectId } from 'mongodb';

interface Customer {
  _id: ObjectId;
  name: string;
  email: string;          
  civicDID: string;      
  createdAt: Date;
  updatedAt: Date;
}