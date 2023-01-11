const midtransCient = require('midtrans-client')
const{Transaction, Doctor} = require('../models/index')

class PaymentController{
    static async getPaymment(req, res){
        try {
            const {email} = req.user
            const {price} = req.body
            // console.log(req.body,'lllllllll'); 
            const snap = new midtransCient.Snap({
                isProduction:false,
                serverKey: process.env.SERVER_KEY_MIDTRANS
            })
            const order_id = new Date().getTime()
            let parameter = {
                "transaction_details":{
                    "order_id": `YOUR-ORDERID-${order_id}`,
                    "gross_amount": price
                },
                "credit_card":{
                    "secure": true
                },
                "customer_details":{
                    "first_name": email,
                    "email": email
                }
            }
    
            const token = await snap.createTransaction(parameter)
            res.status(200).json({token, order_id})
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PaymentController