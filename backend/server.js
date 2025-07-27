// Load .env variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Get the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

if (!MONGODB_URI) {
  console.error("Error: MONGO_URI is not defined in your .env file.");
  console.error(
    "Please ensure your .env file contains: MONGO_URI=mongodb://localhost:27017/your_database_name"
  );
  process.exit(1);
}

// Define Mongoose Schema for Questions
const questionSchema = new mongoose.Schema(
  {
    question_order: { type: String, required: true, unique: true },
    question: { type: String, required: true },
    resource_tags: [String],
  },
  {
    timestamps: true,
  }
);

// Create Mongoose Model for Questions
const Question = mongoose.model("Question", questionSchema);

// Define Mongoose Schema for Resources
const resourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organization: String,
    description: String,
    services: [String],
    populations_served: [String],
    contact: {
      website: String,
      email: String,
      phone: String,
      address: String,
    },
    availability: String,
    languages: [String],
    cost: String,
    coverage_area: [String],
    location: {
      latitude: Number,
      longitude: Number,
    },
    resource_tags: {
      // Array of strings to categorize the resource
      type: [String],
      index: true,
    },
    last_reviewed: Date,
  },
  {
    timestamps: true,
  }
);

// Create Mongoose Model for Resources
const Resource = mongoose.model("Resource", resourceSchema);

// Helper function to determine the next sequential question_order ID
const getNextSequentialQuestionId = (currentId) => {
  if (!currentId || !currentId.startsWith("q")) {
    return null;
  }
  const num = parseInt(currentId.substring(1), 10);
  if (isNaN(num)) {
    return null;
  }
  // Find the next question in numerical sequence
  return `q${num + 1}`;
};

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    // API Routes
    // Get a specific question by its question_order
    app.get("/api/questions/:question_order_id", async (req, res) => {
      try {
        // Get the ID from the URL parameter
        const { question_order_id } = req.params;

        // Find the question in the database
        const questionDoc = await Question.findOne({
          question_order: question_order_id,
        });

        if (!questionDoc) {
          return res
            .status(404)
            .json({ message: "No more questions found for this sequence." });
        }

        // Generate 'Yes' and 'No' options
        const nextQuestionId = getNextSequentialQuestionId(question_order_id);

        const generatedOptions = [
          { label: "Yes", nextId: nextQuestionId },
          { label: "No", nextId: nextQuestionId },
        ];

        // Send the constructed question object back to the frontend
        res.json({
          id: questionDoc.question_order,
          question: questionDoc.question,
          options: generatedOptions,
          resource_tags: questionDoc.resource_tags || [],
        });
      } catch (error) {
        console.error("Error fetching question:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    // Filter resources by tags
    app.post("/api/resources/filter", async (req, res) => {
      try {
        const { tags } = req.body;

        if (!tags || !Array.isArray(tags) || tags.length === 0) {
          // Return all resources or an empty array, if no tags are provided
          const allResources = await Resource.find({});
          return res.json(allResources);
        }

        // Find resources that have at least one of the provided tags
        const resources = await Resource.find({ resource_tags: { $in: tags } });

        // Send the found resources as JSON
        res.json(resources);
      } catch (error) {
        console.error("Error fetching resources by tags:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    // Confirm server is running
    app.get("/", (req, res) => {
      res.send("Immigration Emergency Plan Backend API is running!");
    });

    // Start the server ONLY after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(
        `API available at http://localhost:${PORT}/api/questions/:question_order_id`
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // Exit process if DB connection fails
    process.exit(1);
  });
