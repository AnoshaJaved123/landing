// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../Modules/User"
import connectDb from "../../Database/dbConfig"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
        if (req.method == "POST") {
                // console.log(req.body)
                const {email,password} =JSON.parse(req.body)

                let user = await User.findOne({email:email})
             
                if(user){
                // const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
                // let decryptedpass = bytes.toString(CryptoJS.enc.Utf8)
                // console.log('user.email',user.email)
                // console.log('user.password',user.password)
                // console.log('req.body.email',email)
                // console.log('req.body.password',password)
               if (email === user.email && password === user.password) {
          
                // const token = jwt.sign({email:user.email}, 'Anosha-Webbuilder-Project-2022');
                var token = jwt.sign({userId:user._id}, process.env.JWT_SECRET , { expiresIn: '2d' });
                // var name = user.name
                // var email = user.email

                       res.status(200).json({ success: 'true',token,name:user.name,email:user.email})
               }
                  }
        else {
                res.status(400).json({ success: 'false', error:'No user found' })

        }
               
        }
        else {
                res.status(400).json({ error: 'This method is not allowed' })

        }

     
}

export default connectDb(handler);
