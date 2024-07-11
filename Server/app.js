import Express from 'express'
import dotenv from 'dotenv'
import db from './db/db.js'
import cors from 'cors'
import route from './route/route.js'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Calculate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app =Express()
dotenv.config()
app.use(cors())
app.use(Express.json())

db()
app.use('/product_list', Express.static(path.join(__dirname, 'product_list')));
app.use('/api/vi',route)

app.listen(process.env.PORT,()=>{
    console.log('server is running'+` ${process.env.PORT}`)
})