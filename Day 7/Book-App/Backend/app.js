const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Define Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  image: String,
});

// Define Book Model
const Book = mongoose.model("MyBook", BookSchema);

// Routes
app.post("/books", async (req, res) => {
  try {
    const newbook = new Book(req.body);
    await newbook.save();
    res.status(200).send("Book Added");
  } catch {
    res.status(500).send("Server Error");
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.get("/search", async (req, res) => {
  const { title } = req.query;
  try {
    const books = await Book.find({
      title: { $regex: title, $options: "i" }, // Case-insensitive search
    });
    res.json(books);
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).send("Book Not Found");
    res.json(book);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Start Server
app.listen(9000, () => {
  console.log("Server running on port 9000");
});
