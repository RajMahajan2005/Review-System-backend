import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/feedbackroute.js";
import { createAdmin , createAlumni, getAllUsers} from "./contollers/userController.js";
import { createCompany, getCompanies } from "./contollers/CompanyControllers.js";
import { createReview, getAllReviews } from "./contollers/reviesController.js";
import { likeReviews } from "./contollers/likesController.js";

const app = express();

const PORT = 3000;


app.use(express.json())

app.use("/api/v1",router)


dotenv.config(); 


dbConnect();


app.post("/api/v1/admin/create",createAdmin);
app.post("/api/v1/alumni/create",createAlumni);
app.post("/api/v1/company/create",createCompany);
app.post("/api/v1/review/create",createReview);
app.post("/api/v1/like/add",likeReviews);


app.get("/api/v1/get/user",getAllUsers);
app.get("/api/v1/company/get",getCompanies);


app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});










