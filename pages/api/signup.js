// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var CryptoJS = require("crypto-js");
import Page from "../../Modules/Page";
import User from "../../Modules/User";
import connectDb from "../../Database/dbConfig";
const handler = async (req, res) => {

        if (req.method == "POST") {
                // console.log(req.body)
                const {name,email,password} =JSON.parse(req.body)
                let u = new User({
                        name,
                        email,
                        // password:CryptoJS.AES.encrypt(req.body.password,process.env.AES_SECRET).toString(),
                        password
                 })
                await u.save()
                await new Page({user:u._id, name:"empty", slug:"empty"}).save()
                res.status(200).json({ success: 'true'})

        }
        else {
                res.status(400).json({ error: 'This method is not allowed' })
                console.log(error)

        }

     
}

export default connectDb(handler);
