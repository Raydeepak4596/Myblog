import mongoose, { model } from "mongoose";
const schema=mongoose.Schema
const newschema=new schema({
    title:String,
    description:String,
    image:String,
})


const myuserdata=new schema({
    name:String,
    username:String,
    password:String,
})
const add_product=new schema({
    title:String,
    description:String,
    image:String,
})

const modell=mongoose.model('MUI_model',newschema)
const myuser=mongoose.model('user',myuserdata)
const product_list=mongoose.model('Admin/add_product',add_product)

export default modell
export {myuser,product_list}