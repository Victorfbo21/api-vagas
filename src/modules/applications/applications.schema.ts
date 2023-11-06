import mongoose, { Types } from "mongoose";


const ApplicationsSchema = new mongoose.Schema({
    jobOpportunity: { type: Types.ObjectId, ref: 'Jobs' },
    user: { type: Types.ObjectId, ref: 'User' },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
})

const Applications = mongoose.model('Applications', ApplicationsSchema)

export default Applications