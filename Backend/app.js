const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./signup');
const multer = require('multer');
const path = require('path');
const File = require('./fileupload.js');
const upload = multer();
const uri = "mongodb://127.0.0.1:27017/practices"

const port = 5000;

dotenv.config();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');

});



app.get('/hello', (req, res) => {
  res.send('Hello World! How are you,');

});

app.post('/signup', upload.none(), async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(200).send('Signup successful!');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Signup failed. Please try again.');
  }
});
app.post('/login', upload.none(), async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    // console.log(existingUser.name);
    if (existingUser) {
      // Check if password is correct
      console.log('Hashed password from DB:', existingUser.password);
      const isMatch = await bcrypt.compare(password, existingUser.password);
      console.log('Password match:', isMatch);
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
      // Return success message if login is successful
      return res.status(200).send(existingUser.name);
    } else {
      // User does not exist
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
});
app.post("/deleteuser", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount === 1) {
      return res.status(200).send('User deleted successfully');
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
});

app.get('/getusers', async (req, res) => {
  try {
    const users = await User.find({}, 'name email password');

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/updateuser/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize upload
const uploadImg = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single('image');

// Check file type
function checkFileType(file, cb) {
  // Allowed file extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Upload endpoint
app.post('/upload', (req, res) => {

  uploadImg(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (req.file == undefined) {
      return res.status(400).json({ message: 'No file selected!' });
    }

    const newFile = new File({
      filename: req.file.filename,
      filepath: `/uploads/${req.file.filename}`,
    });

    try {
      const savedFile = await newFile.save();
      res.json({
        message: 'File uploaded!',
        filePath: savedFile.filepath,
      }); return res.status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
});


app.use('/uploads', express.static('uploads'));


app.get('/getimage', async (req, res) => {
  try {
    const file = await File.find({}, 'filename filepath');
    

    res.json(file);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
