const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/analyze", upload.single("image"), (req, res) => {
  const { lat, lon } = req.body;

  res.json({
    message: "Image received. AI analysis coming soon.",
    location: { lat, lon }
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
