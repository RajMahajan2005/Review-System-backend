import userModel from "../models/user.js";

export const isAdmin=async (req,res,next)=>{
    try {
        const {email}=req.body;
       const userInfo = await userModel.findOne({email })

       if(userInfo && userInfo.role == "admin"){
        next();

       }
       else{
        res.status(403).json ({
            message : "acess denied , only admin can acess"
        })
       }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message : "internal server error "
        })
    }
}