import { Request, Response, Router } from 'express';
import Register from '../service/Register';
import RegisterRequest from '../data/dtos/RegisterRequest';



export default class RegisterController {
  public router: Router;
  private registerService: Register;

  constructor() {
    this.router = Router();
    this.registerService = new Register(); 
    this.handleRegister = this.handleRegister.bind(this);
    this.routes();
  }

  private routes() {
    this.router.post('/customerRegister', this.handleRegister);
  }

  private handleRegister = async (req: Request, res: Response): Promise<void> => {
    try {
      const registerRequest : RegisterRequest = req.body;

      this.registerService.register(registerRequest);

      res.status(201).json({ message: 'Customer registered successfully', 
        customer: registerRequest });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Registration failed', error });
    }
  }
}
