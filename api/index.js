require("dotenv").config();
const express = require("express");

const path = require("path");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
app.use(cors());
const AuthUser = require("./routes/auth/index");
connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use("/api/auth", AuthUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
