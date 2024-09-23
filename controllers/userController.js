// backend/controllers/userController.js
// backend/controllers/userController.js
const multer = require("multer");

// Configurar dónde y cómo almacenar los archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

exports.registerUser = (req, res) => {
  const {
    firstName,
    lastName,
    country,
    address,
    contactNumber,
    age,
    email,
    password,
    confirmPassword,
  } = req.body;
  const profilePicture = req.file ? req.file.filename : null;

  // Simulación de registro de usuario
  const newUser = {
    firstName,
    lastName,
    country,
    address,
    contactNumber,
    age,
    email,
    password,
    profilePicture,
  };
  // Aquí puedes agregar la lógica para almacenar estos datos en la base de datos

  res.status(201).json({ message: "Usuario registrado con éxito" });
};
