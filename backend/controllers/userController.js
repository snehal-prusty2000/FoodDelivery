import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';


//Login User
const loginUser = async(req,res) =>{
    const {password , email } = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User Does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false, message :"Error"})
    }
}
const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRETE)
}


//Register User
const registerUser = async(req,res) =>{
    const {name, password , email } = req.body;//here destructe the request body to find name password email
    try {
     //Checking is user already exist
     const exist = await userModel.findOne({email});
     if(exist){
         return res.json({success:false,message:"User Already Exist"})
     }
     //validating email format & strong password
     if(!validator.isEmail(email)) {
         return res.json({success:false,message:"Please Enter Valid Email"})
     }
     if(password.length < 8){
         return res.json({success:false,message:"Please Enter Strong Password"})
     }
     //hashing userPassword
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password,salt);
 
     const newUser = new userModel({
         name:name,//here destructure name so req.body not required
         email:email,
         password:hashedPassword
     })
 
       const user = await newUser.save();
       const token = createToken(user._id);

       res.json({success:true,token})
 
 
    } catch (error) {
     console.log(error)
     res.json({success:false, message :"Error"})
    }
}

export {loginUser,registerUser};