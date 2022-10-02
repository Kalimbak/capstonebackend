import User  from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../helpers/sendEmail.js";

export const reset = async (req, res) =>{

    const user = await User.findOne({email: req.body.email});
try {
    if(user){
      
            const message = `
              <h2>reset your password</h2>
              <a href="http://localhost:5000/login">here</a>
           
              `;
            sendEmail(message, data.email);
            res.status(201).json({
              message: req.t('user_created'),
              data,
            });
          
            console.log(message, "here");
      
    }
    else {
        console.log("email does not exist");
    }
} catch (error) {
    console.log(error)
}

}