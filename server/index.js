require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
// DB Config
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gqjosv0.mongodb.net/`,
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
app.get("/", (req, res) => res.send("Hello World"));
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
// const port = process.env.PORT || 3000;
const PORT = process.env.PORT||5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
