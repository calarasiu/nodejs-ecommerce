import express from'express'
import dotenv from'dotenv'
import colors from 'colors'
import  cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()

const app = express()
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))


