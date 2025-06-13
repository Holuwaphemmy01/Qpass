import { CustomerModel } from '../data/model/Customer';
import type { Customer } from '../data/model/Customer';
import mongoose from 'mongoose';

export default class CustomerRepository {
    async create(customer: Customer): Promise<Customer> {
        try {
            return await CustomerModel.create(customer);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to create customer: ${error.message}`);
            } else {
                throw new Error('Failed to create customer: Unknown error');
            }
        }
    }

    async findById(id: string): Promise<Customer | null> {
        try {
            return await CustomerModel.findById(id).exec();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to find customer by id: ${error.message}`);
            } else {
                throw new Error('Failed to find customer by id: Unknown error');
            }
        }
    }

    async findByEmail(email: string): Promise<Customer | null> {
        try {
            return await CustomerModel.findOne({ email }).exec();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to find customer by email: ${error.message}`);
            } else {
                throw new Error('Failed to find customer by email: Unknown error');
            }
        }
    }

    async findAll(): Promise<Customer[]> {
        try {
            return await CustomerModel.find().exec();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to find all customers: ${error.message}`);
            } else {
                throw new Error('Failed to find all customers: Unknown error');
            }
        }
    }

    async update(id: string, customer: Customer): Promise<Customer | null> {
        try {
            return await CustomerModel.findByIdAndUpdate(id, customer, { new: true }).exec();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to update customer: ${error.message}`);
            } else {
                throw new Error('Failed to update customer: Unknown error');
            }
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await CustomerModel.findByIdAndDelete(id).exec();
            return !!result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to delete customer: ${error.message}`);
            } else {
                throw new Error('Failed to delete customer: Unknown error');
            }
        }
    }
}