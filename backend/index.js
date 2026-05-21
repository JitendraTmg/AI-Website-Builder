import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './database/db.js';
import authRoute from './routes/authRoute.js';

const app = express()
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRoute)

//http://localhost:8000/api/auth/google

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is listening at port:${PORT}`);
})