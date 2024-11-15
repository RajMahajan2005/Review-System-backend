import { createAdmin , createAlumni, getAllUsers} from "../contollers/userController.js";
import { createCompany, getCompanies } from "../contollers/CompanyControllers.js";
import { createReview, getAllReviews } from "../contollers/reviesController.js";
import { likeReviews } from "../contollers/likesController.js";

import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router()


router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/company/create",isAdmin,createCompany);
router.post("/review/create",createReview);
router.post("/like/add",likeReviews);


router.get("/get/user",getAllUsers);
router.get("/company/get",getCompanies);

export default router;