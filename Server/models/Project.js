const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);