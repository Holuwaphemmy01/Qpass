
import CustomerRepository from "../repository/CustomerRepo";
import RegisterRequest from "../data/dtos/RegisterRequest";
import { Customer } from "../data/model/Customer";
export default class Register {

    private customerRepo: CustomerRepository;
    private customer: Customer;

    constructor(){
        this.customerRepo = new CustomerRepository();
        this.customer = {} as Customer; 
    }
 

  async  register (dto:RegisterRequest ): Promise<any> {

    if (!dto.name || !dto.email || !dto.civicDID) {
      throw new Error("All fields are required");
    }
    if (typeof dto.name !== 'string' || typeof dto.email !== 'string' || typeof dto.civicDID !== 'string') {
      throw new Error("Invalid data types");
    }
    if (!dto.email.includes('@')) {
      throw new Error("Invalid email format");
    }

    this.customer = this.mapToCustomer(dto);
    try {
      await this.customerRepo.create(this.customer);
    } catch (error) {
      throw new Error(`Failed to register customer: ${error}`);
    }

    return this.customer;
  }





  private mapToCustomer(dto: RegisterRequest): Customer {
    return {
      name: dto.name,
      email: dto.email,
      civicDID: dto.civicDID
    } as Customer;
  }
}