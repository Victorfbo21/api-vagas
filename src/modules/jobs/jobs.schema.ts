import mongoose from "mongoose";


const experience = [
    {
        order: 1,
        level: 'estagiário'
    },
    {
        order: 2,
        level: 'júnior'
    },
    {
        order: 3,
        level: 'pleno'
    },
    {
        order: 4,
        level: 'sênior'
    },
    {
        order: 5,
        level: 'especialista'
    }
]

const localidade = ["A", "B", "C", "D", "E", "F"]


const JobsSchema = new mongoose.Schema({
    company: { type: String },
    title: { type: String },
    description: { type: String },
    locality: { type: String, enum: localidade },
    experienceLevel: { type: Object, enum: experience },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
})

const Jobs = mongoose.model('Jobs', JobsSchema)

export default Jobs