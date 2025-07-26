// Load .env variables
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Define a simple schema for questions
const questionSchema = new mongoose.Schema({
  id: String,
  question: String,
  type: String, // e.g., "yes_no", "multiple_choice"
  options: [
    {
      label: String,
      nextId: String,
      resources: [String] // Links or resource IDs
    }
  ]
});

const Question = mongoose.model('Question', questionSchema);

// --- ROUTES ---

// Get ALL questions
app.get('/api/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

// Get one question by its ID
app.get('/api/questions/:id', async (req, res) => {
  const question = await Question.findOne({ id: req.params.id });
  res.json(question);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
