import RegisterRequest from "../dtos/RegisterRequest";
import CompanyRepository from "../repository/CompanyRepo"; 
import { Company } from "../model/Company"; 


export default class Register {
    
    private customerRepo: CompanyRepository;
    private company: Company; 
    

  constructor() {
    this.customerRepo = new CompanyRepository();
    this.company = {} as Company; 
  }


    async register(dto: RegisterRequest): Promise<any> {
        if (!dto.name || !dto.email || !dto.civicDID) {
        throw new Error("All fields are required");
        }
        if (typeof dto.name !== 'string' || typeof dto.email !== 'string' || typeof dto.civicDID !== 'string') {
        throw new Error("Invalid data types");
        }
        if (!dto.email.includes('@')) {
        throw new Error("Invalid email format");
        }
    
        this.company = this.mapToCompany(dto);
        try {
        await this.customerRepo.create(this.company);
        } catch (error) {
        throw new Error(`Failed to register company: ${error}`);
        }
    
        return this.company;
    }

    private mapToCompany(dto: RegisterRequest): Company {
        return {
            name: dto.name,
            email: dto.email,
            civicDID: dto.civicDID
            // Add other fields as necessary based on the Company model
        } as Company;
    }
}