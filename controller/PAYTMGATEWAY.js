
import PaytemChecksum from '../paytm/PaytmChecksum.js' ;
import { paytmParams , paymentmerchentkey} from '../server.js';

export const paymentUsingpaytm = async (req , res) => {
    try{
 let paytmchecsum = await PaytemChecksum.generateSignature(paytmParams , paymentmerchentkey) ;  
 let params = {
    ...paytmParams , "CHECKSUMHASH" : paytmchecsum
 }
console.log(paytmchecsum)
 res.staus(200).json("done") ; 
    }catch(error){
        res.status({error :  error.message } )
    }
     
  }