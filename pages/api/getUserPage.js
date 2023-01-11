var jwt = require('jsonwebtoken');
import Page from '../../Modules/Page'
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
        const userpage = await Page.find({user:userId})
        
        // console.log(userpage)
        res.status(200).json(userpage)
          
              
    } catch (error) {
        return res.status(400).json({ error: "error" })
    } 
  }



export default connectDb(handler);