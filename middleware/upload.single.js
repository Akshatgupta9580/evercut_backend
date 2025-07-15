import multer from 'multer';
import { storage } from '../config/cloudinary.js';

const upload = multer({ storage });

export default upload.single('coverImage'); // Expect "coverImage" field in form-data
