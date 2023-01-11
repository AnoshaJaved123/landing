var jwt = require('jsonwebtoken');
import User from '../../Modules/User'
import connectDb from '../../Database/dbConfig'



const handler = async (req, res) => {


    const { authorization } = req.headers
    // console.log('authorization',authorization)
    if (!authorization) {
        return res.status(400).json({ error: "you must log in" })
    }
    try {
        const {userId} = jwt.verify(authorization, process.env.JWT_SECRET)
        req.userId = userId
        // const {email} = req.body
        // req.body =email
        const dbuser = await User.findOne({_id:userId})
        
        // console.log(dbuser)
        res.status(200).json({dbuser})
          
              
    } catch (error) {
        return res.status(400).json({ error: "error" })
    } 
  }



export default connectDb(handler);