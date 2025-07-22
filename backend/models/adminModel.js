import mongoose from "mongoose";
const { Schema, model } = mongoose;

const adminSchema = new Schema({
    name: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true
    },
    password: {
        type:String,
        required : true
    },
    image: {
        type:String,
        required : true
    },
    role :{
        type:String,
        default: "admin"
    }
})

const Admin = model("admins", adminSchema);

export default Admin;