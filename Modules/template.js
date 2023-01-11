import mongoose from 'mongoose';
const { Schema } = mongoose;

const Template = new Schema({
    slug:  {type:Number, required:true},
    name:  {type:String, required:true},

        content: Object,
      },
      {
        timestamps: true,
      }, );
mongoose.models ={}
export default mongoose.model('Template', Template);