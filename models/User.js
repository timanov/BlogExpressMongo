import mongoose from "mongoose";

const UserChema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

});