import { InstitutionModel } from '../data/model/Institution';
import type { Institution } from '../data/model/Institution'; // Remove or fix this line if 'Institution' type does not exist
import mongoose from 'mongoose';

export class InstitutionRepository {

    async create(institution: Institution): Promise<Institution> {
        try {
            return await InstitutionModel.create(institution);
        } catch (error) {
            throw new Error(`Failed to create institution: ${error}`);
        }
    }

    async findById(id: string): Promise<Institution | null> {
        try {
            return await InstitutionModel.findById(id).exec();
        } catch (error) {
            throw new Error(`Failed to find institution by id: ${error}`);
        }
    }

    async findByEmail(email: string): Promise<Institution | null> {
        try {
            return await InstitutionModel.findOne({ email: email }).exec();
        } catch (error) {
            throw new Error(`Failed to find institution by email: ${error}`);
        }
    }

    async findAll(): Promise<Institution[]> {
        try {
            return await InstitutionModel.find().exec();
        } catch (error) {
            throw new Error(`Failed to find all institutions: ${error}`);
        }
    }

    async update(id: string, institution: Institution): Promise<Institution | null> {
        try {
            return await InstitutionModel.findByIdAndUpdate(id, institution, { new: true }).exec();
        } catch (error) {
            throw new Error(`Failed to update institution: ${error}`);
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await InstitutionModel.findByIdAndDelete(id).exec();
            return !!result;
        } catch (error) {
            throw new Error(`Failed to delete institution: ${error}`);
        }
    }
}