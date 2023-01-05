import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    firstname:{
        type:String,
        min:5,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        min:5,
        required:true,
        trim:true
    },
    email:{
        type:String,
        min:5,
        required:true,
        trim:true,
        unique:true
    },
    username:{
        type:String,
        min:5,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        min:5,
        required:true,
        trim:true,
        
    },
    phone:{
        type:String,
        min:5,
        required:true,
        trim:true,
        unique:true
    }
});

export const signupModel = mongoose.model("signup",signupSchema);

//    default signupModel;
  

  //

  const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        require:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});

 export const ProductModel = mongoose.model("product-datas",ProductSchema)

  