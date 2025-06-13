import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db'
import cors from 'cors';
import customerRouter from './route/CustomerRoute';

dotenv.config();
const app = express();
app.use(express.json());


app.use(cors())
connectDB() ;
app.get('/', (req, res)=>{
    res.send("Backend Working")
})


app.use('/api/customer', customerRouter);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


