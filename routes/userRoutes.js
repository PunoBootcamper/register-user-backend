// backend/routes/userRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/register', upload.single('profilePicture'), registerUser);

module.exports = router;

