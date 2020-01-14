import mongoose, { Schema } from 'mongoose';


// define data schema

var dataSchema = new Schema({
    ax: String,
    ay: String,
    az: String,
    ir: String,
    bpm: String,
    pd: String
})

// Export default model
export default mongoose.model('deviceData', dataSchema)