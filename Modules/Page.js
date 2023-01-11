import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema.Types

const Page = new Schema({
    user: {
        type: ObjectId,
        ref: "user"
      },
         name: {
          type: String,
          required: true,
          trim: true,
          maxlength: 25,
        },
        slug: {
          type: String,
          required: true,
        },
        content: Object,
      },
      {
        timestamps: true,
      }, );
mongoose.models ={}
export default mongoose.model('Pages', Page);