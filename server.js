const express = require("express");
const connectDB = require("./config/db");
const helmet = require("helmet");

const app = express();

app.use(helmet());

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
//app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("API RUNNING"));

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
