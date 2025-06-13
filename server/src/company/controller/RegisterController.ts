import Register from "../service/Register";
import RegisterRequest from "../dtos/RegisterRequest";
import { Request, Response, Router } from 'express';



export default class RegisterResponse {

public router: Router;
  private registerService: Register;

  constructor() {
    this.registerService = new Register();
    this.router = Router();
    this.handleRegister = this.handleRegister.bind(this);
    this.routes();
  }


  private routes() {
    this.router.post('/', this.handleRegister);
  }

  async handleRegister(req: Request, res: Response): Promise<void> {
    try {
      const registerRequest: RegisterRequest = req.body;

      const customer = await this.registerService.register(registerRequest);

      res.status(201).json({ message: 'Customer registered successfully', customer });
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
      res.status(500).json({ message: 'Registration failed', error: errorMessage });
    }
  }
}