import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



// Authentication
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader ? authHeader.split(" ")[1] : '';
    console.log(req.headers);
    if (token == '') return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err){        console.log(err); return res.sendStatus(403);}
      req.user = user;
      console.log(user);
      next();
    });
  
  }

//   export const restrictedTo = (...role)=>{
//       return (req, res, next) =>{
//         //   if (roles.includes(req.user.role)) {
//         //       return res.status(401).json({message:" your not allowed to do this role."});
//         //   }
//            if (req.user.role != 'admin') {
//             return res.status(401).json({message: `you should be logged in as admin`})
//           } else {
//             blog.author = user.name;
//             blogs.push(blog);
//             res.status(201).json({message: 'blog added', blog})
//           }
//           next()
//       }
//   }
  export const isAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role == "admin") {
        return next();
    }
    else {
        return res.status(401).json({
      status: "fail",
      message: "You don't have permission to perform this action",
    
    });
}
  }
