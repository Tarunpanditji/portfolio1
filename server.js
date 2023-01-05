import dotenv from "dotenv" ;
dotenv.config();

import express from 'express';
import Route from './routes/route.js';
import mongoose from 'mongoose';
import { productData } from './controller/userControllerapi.js';
import {v4 as uuid} from "uuid"; 
import connection from './datab/dbconn.js';
import cors from'cors'
 
const app = express()

app.use(cors());
app.use(express.json())
app.use("/",Route);

 

const PORT = process.env.PORT || 8000

if (process.env.NODE_ENV === 'production'){
app.use(express.static("my-app/build"))
}

app.get("*" , function(req , res) {
    res.sendFile("my-app/build/index.html")
})
app.listen(PORT)

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL ||  `mongodb+srv://${user}:${password}@ecommerce.hch9xwc.mongodb.net/?retryWrites=true&w=majority`
connection(URL)
var data = "`mongodb+srv://${user}:${password}@ecommerce.hch9xwc.mongodb.net/flipkart?retryWrites=true&w=majority`"
productData()
console.log("done it's working on port " , PORT  )

export let paymentmerchentkey = process.env.PAYTM_MERCHANT_KEY ; 
 
export let paytmParams = {} ;


