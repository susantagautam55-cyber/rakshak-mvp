const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Rakshak backend is running");
});

app.post("/analyze", upload.single("image"), (req, res) => {
  const { lat, lon } = req.body;

  res.json({
    success: true,
    message: "Backend working. AI coming next.",
    location: { lat, lon }
  });
});

app.listen(3000, () => {
  console.log("🚀 Rakshak backend running on http://localhost:3000");
});
