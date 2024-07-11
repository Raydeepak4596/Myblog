import Express from 'express'
import model, { myuser, product_list } from '../model/model.js'
import multer from 'multer'
import mongoose from 'mongoose'


const router = Express.Router()




router.post('/add', async (req, res) => {
    try {
        const { title, description } = req.body
        console.log(title, description)
        const data = new model({ title: title, description: description })
        await data.save().then(() => {
            console.log('data is inserted')
        })
    } catch (error) {

    }
})


router.get('/datacall', async (req, res) => {
   try {
    const dataa=await product_list.find()
 
    res.json(dataa)
   } catch (error) {
    
   }
})

router.get('/totalpost', async (req, res) => {
    try {
     const dataa=await product_list.find()
  
     res.json(dataa)
    } catch (error) {
     
    }
 })
 




router.post('/user', async (req, res) => {
    try {
        const { name, username, password } = req.body
        const finduser = await myuser.findOne({ username })
      
        if (finduser) {
            res.json({ message:'User is Already registered'})
        }
        else {
            const data = new myuser({ name: name, username: username, password: password })
            await data.save().then(() => {
                console.log('user is inserted')
            })
            res.json({success:true})
        }
        
    } catch (error) {

    }
})



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});
const upload = multer({storage: storage })

router.post('/withimagedata', upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body
        const im = req.file.filename
        const data = new model({ title: title, description: description, image: im })
        await data.save().then(() => {
            console.log('data is inserted')
        })
    } catch (error) {

    }
})



const Adminstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './product_list/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});
const Adminlist_product = multer({ storage: Adminstorage })

router.post('/admin/add_product', Adminlist_product.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body
        const im = req.file.filename
        console.log(im)
        const data = new product_list({ title: title, description: description, image: im })
        await data.save().then(() => {
            console.log('data is inserted')
        })
    } catch (error) {

    }
})





export default router