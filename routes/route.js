import express from "express" ; 
import { usersignup , userlogin , getproduct , getproductByid , productData  } from "../controller/userControllerapi.js";
import {paymentUsingpaytm} from "../controller/PAYTMGATEWAY.js"
 
const Route = express.Router();
Route.post("/" , productData)

Route.post("/signup" , usersignup)

Route.post("/login" , userlogin);

Route.get("/product",getproduct)

Route.get("/product/:id",getproductByid)

Route.post("/payment" , paymentUsingpaytm)

export default Route;