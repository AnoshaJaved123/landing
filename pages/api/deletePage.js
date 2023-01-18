import Page from '../../Modules/Page'
import connectDb from '../../Database/dbConfig'

const handler = async (req, res) => {

    if (req.method == "POST") {
        const { id } = req.body;
        console.log('id',id)
        const del = await Page.findByIdAndDelete({_id:id})
        
        res.status(200).json({ success:true})

    }
    else {
            res.status(400).json({ error: 'This method is not allowed' })
            console.log(error)

    }

 
}




export default connectDb(handler);