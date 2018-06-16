import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReferenceSchema = new Schema({
    ref: {
        type: Number,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    
})
export default mongoose.model('reference', ReferenceSchema);