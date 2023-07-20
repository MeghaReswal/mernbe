import express from "express"
import { profile, register, getAllUser } from "../controllers/user.controller.js"

const router = express.Router();


router.get("/user", getAllUser)
// router.get('/user', user );
router.get('/profile', profile);    
router.post('/register', register);

export default router;