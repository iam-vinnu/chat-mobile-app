import mongoose, { Schema } from "mongoose";
import { UserProps } from "../config/interfaces";

const userSchema : Schema<UserProps> = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
    },
    avatar:{
        type:String
    }
},{timestamps: true});