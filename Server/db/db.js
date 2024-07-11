import mongoose from "mongoose";

const db=async()=>{
try {
    mongoose.connect(process.env.URL).then(()=>{
        console.log('db is connected')
    }).catch(console.log('db is not connected'))
} catch (error) {
    console.log('nor')
    
}
}
export default db