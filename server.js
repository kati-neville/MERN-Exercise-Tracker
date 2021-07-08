const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");



require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connect = mongoose.connection;
mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
})


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})


