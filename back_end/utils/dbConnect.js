const mongoose = require("mongoose");
mongoose
    .connect(`${process.env.DB_URI}`)
    .then(() => console.log("MongoDB connection established...!"))
    .catch((err) => {
        console.log(`DATABASE connection failed !!! ${err}`)
    });