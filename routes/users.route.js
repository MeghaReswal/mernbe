import express from "express"
import {user, profile, register } from "../controllers/user.controller.js"

const router = express.Router();

router.get('/user', user );
router.get('/profile', profile);    
router.get('/register', register);

export default router;