
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'http://subof.neonecy.com' }));
app.use(express.json());
app.use('/api/uploads', express.static('public/uploads'));

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1);
}

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const projectRoutes = require('./routes/projects');

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/hello', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
