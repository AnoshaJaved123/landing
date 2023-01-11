import Page from '../../Modules/Page'
import connectDb from '../../Database/dbConfig'



const handler = async (req, res) => {

        const { authorization } = req.headers
        // console.log('pageId',authorization)
        // console.log('content',req.body)

        // res.header('Content-Type', 'application/json');
        // const pageData = await Page.findOne({ _id: pageId });
        // res.json(pageData.content);

        // console.log('pageData.content',pageData.content);

        await Page.findOneAndUpdate({ _id: authorization }, { content:req.body });
       
        res.status(200).json({success:"updated"})
  

 
}




export default connectDb(handler);