import express from "express";
import { userCreate } from "../controllers/userController.js";
import { adminLogin, adminRegister, logOutAdmin, refreshAccessToken, verifyAdmin } from "../controllers/adminController.js";
import { showDataController } from "../controllers/showDataController.js";


const router = express.Router()


router.post("/user", userCreate)
router.post('/register',adminRegister)
router.post('/login',adminLogin)
router.post("/verify", verifyAdmin)
router.post('/refresh',refreshAccessToken)
router.post('/logout',logOutAdmin)
router.get('/user-data',showDataController)

export default router