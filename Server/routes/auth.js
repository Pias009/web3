const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    // For simplicity, let's assume a User model exists
    // const user = await User.findOne({ username });
    // if (user) {
    //   return res.status(400).json({ msg: 'User already exists' });
    // }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user (mock for now)
    const newUser = { username, password: hashedPassword }; // Replace with actual User model save

    // Generate JWT
    const payload = {
      user: {
        id: 'mockUserId' // Replace with actual user ID from DB
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    // const user = await User.findOne({ username });
    // if (!user) {
    //   return res.status(400).json({ msg: 'Invalid Credentials' });
    // }

    // Compare password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(400).json({ msg: 'Invalid Credentials' });
    // }

    // Generate JWT (mock for now)
    const payload = {
      user: {
        id: 'mockUserId' // Replace with actual user ID from DB
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/auth
// @desc    Get authenticated user (example protected route)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // const user = await User.findById(req.user.id).select('-password');
    res.json({ msg: 'Authenticated user data (mock)' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;