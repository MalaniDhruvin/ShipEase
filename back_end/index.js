require("dotenv").config();
const express = require('express');
const cors = require("cors");
require("./utils/dbConnect.js");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Custom CORS headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());
app.use(cookieParser());
app.use("/api", require("./routes/index.js"));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});