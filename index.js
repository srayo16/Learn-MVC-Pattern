const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId, ObjectID } = require('mongodb');
const dbConnect = require('./Utiles/dbConnect');
const partRoute = require("./Routes/v1/parts.route");
const { Countable } = require('./Middleware/viewCount');

const stripe = require('stripe')(process.env.REVEL_TEST_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(Countable());
dbConnect();

app.use("/api/v1/parts", partRoute);


app.get('/', (req, res) => {
    res.send('Alhamdilillah, server is running');
})

app.all("*", (req, res) => {
    res.send("No route found");
})

app.listen(port, () => {
    console.log('Listening to port', port);
})

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});