import Page from '../../Modules/Page'
import connectDb from '../../Database/dbConfig'



const handler = async (req, res) => {
      
        const { authorization } = req.headers
        // console.log('pageId',authorization)
        
        const pages = await Page.findOne({ _id: authorization });
        // console.log('pages',pages.content)
        let response = res.json(pages.content)
        return response;

}




export default connectDb(handler);