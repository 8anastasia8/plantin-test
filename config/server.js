const express = require("express");
const cors = require("cors");
const PORT = 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/temperature", (req, res) => {
    const temperature = Math.floor(Math.random() * 30) + 10;
    res.json({ temperature });
  });
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });