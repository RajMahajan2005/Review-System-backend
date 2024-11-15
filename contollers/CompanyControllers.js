import companyModel from "../models/Company.js";

export const createCompany=async (req, res) => {
    try {
      const { name, location, industry,email } = req.body;
  
      const companyObj = new companyModel({
        name,
        location,
        industry,
        email
      });
  
      const savedcompanyObj = await companyObj.save();
  
      res.json({
        savedcompanyObj,
        message: "Company created successfully"
      });
  
    } catch (error) {
        console.log(error);
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }