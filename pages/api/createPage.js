var jwt = require('jsonwebtoken');
import Page from '../../Modules/Page'
import User from '../../Modules/User'

import connectDb from '../../Database/dbConfig'



const handler = async (req, res) => {

    if (req.method == "POST") {
        const { authorization } = req.headers
        const {name} =req.body
        // console.log('name',name)
       const slug = name.toLowerCase().split(' ').join('-');
    //    console.log('slug',slug)
        const {userId} = jwt.verify(authorization, process.env.JWT_SECRET)
        const dbuser = await User.findOne({_id:userId})
        // console.log('dbuser',dbuser)

     

        // pageBody.slug = slug;
        // pageBody.user = dbuser;
        // console.log('pageBody',pageBody)
            let p = new Page({user:dbuser,name:name,slug:slug,
                content:
                {html:"<body></body>",
                css:"",
                styles:[],
                components:[]
            }
            })
            await p.save()
            // await new Page({user:u._id, name:"empty", slug:"empty"}).save()
            res.status(200).json({ success: 'Page Created' })

    }
    else {
            res.status(400).json({ error: 'This method is not allowed' })
            console.log(error)

    }

 
}




export default connectDb(handler);