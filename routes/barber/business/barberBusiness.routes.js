import express from "express";
import { updateBusinessInfo } from "../../../controllers/barber/business/barberBusiness.controller.js";
import verifyToken from "../../../middleware/verifyToken.js";
const multer = require('multer');
const { storage } = require('../../../config/cloudinary');
const upload = multer({ storage });


const router = express.Router();

const {
  uploadBarberCoverImage,
} = require('../../../controllers/barber/business/barberBusiness.controller');

const authenticateBarber = require('../../../middleware/authenticateBarber');

router.put("/update-business", verifyToken, updateBusinessInfo);
router.post('/cover', authenticateBarber, upload.single('coverImage'), uploadBarberCoverImage);


export default router;
