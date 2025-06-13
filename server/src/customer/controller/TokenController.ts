// src/controllers/authController.ts
import { Request, Response, Router } from 'express';
import { verifyCivicToken } from '../../utils/VerifyToken';
import { RequestControl } from '../data/dtos/RequestControl';

export default class TokenController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.handleCivicAuth = this.handleCivicAuth.bind(this); // Bind the this context
    this.routes();
  }

  private routes() {
    this.router.post('/', this.handleCivicAuth);
  }

  private handleCivicAuth = async (req: Request, res: Response): Promise<void> => {
   

    try {
      const token = req.body as RequestControl;
      const user = await verifyCivicToken(token.tokens);
      console.log('Verified Civic User:', user);
        res.status(200).json({ message: 'Token verified', user });
           
    } catch (error) {
      console.error('Token verification error:', error);
      res.status(401).json({ message: 'Invalid token', error });
    }
  }
}

