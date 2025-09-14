const express = require('express');
const multer = require('multer');
const { auth } = require('../middleware/auth');
const News = require('../models/News');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/', [auth, upload.single('image')], async (req, res) => {
  const { title, description, tags } = req.body;
  const image = req.file ? req.file.path : '';

  try {
    const newNews = new News({
      title,
      description,
      image,
      tags: tags.split(',')
    });

    const news = await newNews.save();
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;