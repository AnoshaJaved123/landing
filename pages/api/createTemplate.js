
import Template from "../../Modules/template";
import connectDb from "../../Database/dbConfig";
const handler = async (req, res) => {

        if (req.method == "POST") {
                // console.log(req.body)
                // const {content} =JSON.parse(req.body)
                let u = new Template({
                    slug:6,
                    name:'Resume website',
                    content:req.body 
                 })
                await u.save()
                res.status(200).json({ success: 'successfully created' })

        }
        else {
                res.status(400).json({ error: 'This method is not allowed' })
                console.log(error)

        }

     
}

export default connectDb(handler);
