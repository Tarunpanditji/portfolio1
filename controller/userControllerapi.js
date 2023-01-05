 
import {signupModel} from "../Model/singupmodel.js";
import { ProductModel } from "../Model/singupmodel.js";
import { products } from "../datab/productdata.js";


export const usersignup = async (req, res) => {
  try {
     
    const signupss = new signupModel(req.body);
    const data = await signupss.save();
     res.status(200).json({status :"Successfull Sign Up"})
    console.log(data)

  } catch (error) {
     res.status(500).json({error : error.message})
  }
}


export const userlogin = async (req, res) => {
  try {

    const username = req.body.username;
    const password = req.body.password;
    const login = await signupModel.findOne({ phone: username , password: password });
    if(login){
      res.status(200).json({data:login})
    }else{
      res.status(401).json("Not found")
    }
    console.log(login)
    



  } catch (error) {
    console.log('err while find ', error.message)
  }
}



export const getproduct = async (req, res) => {
  try {

     
    const login = await ProductModel.find({});

    res.status(200).send({login}) ; 
     



  } catch (error) {
    console.log('err while find ', error.message)
  }
}


export const getproductByid = async (req,res) => {
  try{
    const id = req.params.id ; 
     

    const product = await ProductModel.findOne({'id' : id }) ; 
 
    console.log("working")
     

    res.status(200).json(product);

  }catch(reeor){
      res.status(404).json({message:reeor.message})
  }

}



export const productData = async (req , res) => {
  try{
  const insert = await ProductModel.insertMany(products)
   
  res.send("data inserted successful") ; 

  }catch(error){
    console.log("while inserting data to database we get an error " , error.message)
  }

}