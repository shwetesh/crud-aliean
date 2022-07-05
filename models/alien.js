import mongoose from "mongoose";

const alienschema =new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    tech: {
        type :String,
        required :true
    },
    sub: {
        type: Boolean,
        required:true,
        default:false
    }
})

export default mongoose.model('alien',alienschema);