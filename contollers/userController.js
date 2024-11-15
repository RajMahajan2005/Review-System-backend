import User from "../models/user.js";

// Create an asynchronous function to handle the creation of an Admin user
export const createAdmin=async (req, res) => {
    try {

     // Destructure the 'name', 'email', and 'password' from the request body
      const { name, email, password } = req.body;
  
     // Create a new user object with the provided details and set the role to 'Admin'
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });

      // Save the new user object to the database
      const savedUser=await user.save();
  
      // Respond with a success message and the saved user details
      res.json({
          user:savedUser,
          message:"Admin created successfully"
      })
  
    } catch (error) {
      // If an error occurs, respond with a server error message
      res.json({
          message:"Server error"
      })
  
       // Log the error to the console for debugging
      console.log(error)
    }
  };


  



  export const createAlumni=async (req, res) => {
    try {

     // Destructure the 'name', 'email', and 'password' from the request body
      const { name, email, password } = req.body;
  
     // Create a new user object with the provided details and set the role to 'Admin'
      const user = new User({
        name,
        email,
        password,
        role: "Alumni",
      });

      // Save the new user object to the database
      const savedUser=await user.save();
  
      // Respond with a success message and the saved user details
      res.json({
          user:savedUser,
          message:"Alumni created successfully"
      })
  
    } catch (error) {
      // If an error occurs, respond with a server error message
      res.json({
          message:"Server error"
      })
  
       // Log the error to the console for debugging
      console.log(error)
    }
  };
  


  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }