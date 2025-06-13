import { CompanyModel } from '../model/Company';
import type { Company } from '../model/Company'; // Remove or fix this line if 'Institution' type does not exist
import mongoose from 'mongoose';

export default class CompanyRepository {

    async create(institution: Company): Promise<Company> {
        try {
            return await CompanyModel.create(institution);
        } catch (error) {
            throw new Error(`Failed to create institution: ${error}`);
        }
    }

    async findById(id: string): Promise<Company | null> {
        try {
            return await CompanyModel.findById(id).exec();
        } catch (error) {
            throw new Error(`Failed to find company by id: ${error}`);
        }
    }

    async findByEmail(email: string): Promise<Company | null> {
        try {
            return await CompanyModel.findOne({ email: email }).exec();
        } catch (error) {
            throw new Error(`Failed to find company by email: ${error}`);
        }
    }

    async findAll(): Promise<Company[]> {
        try {
            return await CompanyModel.find().exec();
        } catch (error) {
            throw new Error(`Failed to find all companies: ${error}`);
        }
    }

    async update(id: string, institution: Company): Promise<Company | null> {
        try {
            return await CompanyModel.findByIdAndUpdate(id, institution, { new: true }).exec();
        } catch (error) {
            throw new Error(`Failed to update company: ${error}`);
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await CompanyModel.findByIdAndDelete(id).exec();
            return !!result;
        } catch (error) {
            throw new Error(`Failed to delete company: ${error}`);
        }
    }
}