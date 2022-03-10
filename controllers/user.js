import User  from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signToken = (id) => {
    return jwt.sign({ id, role: 'user' }, 'topSecret', {
      expiresIn: '3d',
    });
  };

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validatiom errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors;

}



export const signup = async (req, res) => {

  // check if the email is already exists
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists){
      return res.status(400).send('Email already exists');
  }
  if(req.body.password !== req.body.confirmPassword ){
      return res.status(400).send('passwords do not match')
  }

   // HASH THE PASSWORD

   const salt = await bcrypt.genSalt(10);
   
   const hashedPassword = await bcrypt.hash(req.body.password, salt);
   

   // create a user
   const user =  User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       password: hashedPassword,
       confirmPassword: hashedPassword
       
   });

   try {
       const savedUser = await user.save();
       const token = signToken(savedUser._id);
        const data = {
            token,
            savedUser,
        };
       res.status(201).json(data);
   } catch (error) {
       res.status(400).send(error);
   }

}



export const login = async (req, res) => {
    
   
// check if the email exists
const user = await User.findOne({email: req.body.email});
if(!user){
    return res.status(400).send('Email is not found');
}else {
    const isPasswordValid = await bcrypt.compare(req.body.password, user.confirmPassword);
    console.log(isPasswordValid)
    if(!isPasswordValid){
        return res.status(400).send('incorrect password');
    } else {
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        res.status(201).json(`Welcome Back`);

    }

}


}

export const getUsers = async(req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json({
            message: "users retrieved",
            result:allUsers
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const updateUser = async(req, res) => {
    try {
        let id = req.params.id;
        const updated = await User.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json({
            message:"user successfully updated",
           
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
        
    }
}

export const deleteUser = async(req,res)=>{
    try {
        let id = req.params.id;
        await User.findByIdAndRemove(id)
        res.status(200).json({
            message:"The user is deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"user not deleted."
        })
    }
}
