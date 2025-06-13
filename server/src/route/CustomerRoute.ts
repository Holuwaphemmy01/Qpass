import express from 'express';
import RegisterController from '../customer/controller/RegisterController';


const customerRouter = express.Router();

customerRouter.get('/', (req, res) => {
  res.send('Customer route is working');
});


const registerController = new RegisterController();
customerRouter.use('/register', registerController.router);


export default customerRouter;