const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const db = mongoose.connection;
db.on('error', (error) => console.error("Error with connection"))
db.once('open', () => console.log("CONNECTED"))

mongoose
.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoBB connected"))
  .catch((err) => console.log("Error during connection", err));

const articleShema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  timeToRead: Number,
  image: String,
});
const Article = mongoose.model("Article", articleShema);

app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    
    res.status(500).json({ message: "Unable to get articles" });
  }
});

app.post("/api/articles", async (req, res) => {
  try {
    const {id, title, content, timeToRead, image } = req.body;
    // if (!id || !title || !content || !date || !timeToRead) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }
    const newArticle = new Article({
      id,
      title,
      content,
      timeToRead,
      image,
    });

    await newArticle.save();
    res.status(200).json({ message: "Article is added", aricle: newArticle });
  } catch (error) {
    console.error("erreoe message", error);
    res.status(500).json({ message: "error 1111" });
  }
});

app.get("/api/temperature", (req, res) => {
  const temperature = Math.floor(Math.random() * 30) + 10;
  res.json({ temperature });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
