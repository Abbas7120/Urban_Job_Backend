import express from  'express';

import {isAuthorised} from "../middlewares/auth.js";
import {
    getAllJobs,
    postJob,
    getMyJobs,
    updateJob,
    getSingleJob,
    deleteJob
   
  } from "../controllers/jobcontroller.js";
const router=express.Router();

router.get("/getall",getAllJobs);
//router.get("/:id",isAuthorised);
router.get("/getmyjobs",isAuthorised,getMyJobs);
router.put("/update/:id",isAuthorised,updateJob);
router.post("/post",isAuthorised,postJob);
router.delete("/delete/:id",isAuthorised,deleteJob);
router.get("/:id", isAuthorised, getSingleJob);
export default router;