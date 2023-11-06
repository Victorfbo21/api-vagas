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


const UserSchema = new mongoose.Schema({

    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    locality: { type: String, enum: localidade },
    experienceLevel: { type: Object, enum: experience },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

export default User