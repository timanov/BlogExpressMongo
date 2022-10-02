import mongoose, { mongo } from "mongoose";

const UserChema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,
}, 
{
    timestamps: true,
},
);

export default mongoose.model('User', UserChema);