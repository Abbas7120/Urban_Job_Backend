import express from  'express';
import { register,login,logout,getUser} from '../controllers/usercontroller.js';
import {isAuthorised} from "../middlewares/auth.js"

const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/getuser",isAuthorised,getUser);
router.get("/logout",isAuthorised,logout);
export default router;