import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: [true, 'Please enter your first name'],
        
    // },
    name: {
        type: String,
        required: [true, 'Please enter your second name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        // validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 6 character'],
        // select:false
    },
    // confirmPassword: {
    //     type: String,
    //     required: [true, 'Please confirm The password'],
    //     minlength: [8, 'passwords do not match'],
    //     // select:false
    // },
    // roles: {
    //     type: String,
    //     default: "user",
    //     enum: ["user", "admin"],
    // }

});


try {
    userSchema.pre("save", async function(next) {
      try {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 12);
        next();
      } catch (err) {
        console.log("some problems occured while creating account", err);
      }
    });

    
  
    userSchema.methods.correctPassword = async function(
      incomingPassword,
      userPassword
    ) {
      try {
        return await bcrypt.compare(incomingPassword, userPassword);
      } catch (err) {
        console.log("some problems occured while comparing passwords", err);
      }
    };
  } catch (err) {
    console.log("some problems occured while creating account", err);
  };

  userSchema.statics.login = async function(email, password) {
      const user = await this.findOne({ email });
      if (user) {
       const auth = await bcrypt.compare(password, user.password);
       if (auth) {
           return user;
       }    
       throw Error('incorrect password');

      }
      throw Error('incorrect email')
  }

const User = mongoose.model('User', userSchema);

export default User;