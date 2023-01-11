// import Page from '../../Modules/Page'
import connectDb from '../../Database/dbConfig'



const handler = async (req, res) => {
    const assets = [
        'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
        // Pass an object with your properties
        {
          type: 'image',
          src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
          height: 350,
          width: 250,
          name: 'displayName'
        },
        {
          // As the 'image' is the base type of assets, omitting it will
          // be set as `image` by default
          src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
          height: 350,
          width: 250,
          name: 'displayName'
        },
       ]

res.json(assets)
       
}




export default connectDb(handler);