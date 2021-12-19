import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api',router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT,() => {
            console.log(`Server started PORT=${process.env.PORT}`)
        })
    }catch (e) {
        console.log(e)
    }
}
start()

