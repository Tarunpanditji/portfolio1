import mongoose from "mongoose";

const connection = async (URL) => {
    try {
    mongoose.connect(URL, {useUnifiedTopology : true , useNewUrlParser : true });
    console.log("connected successfully ")
    }catch(error){
        console.log("error while connect to database " , error.message)
    }
}

export default  connection;