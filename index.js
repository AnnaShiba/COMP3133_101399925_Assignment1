const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {})
    .then(_ => server.listen(3123, () => console.log("Server ready on port 3123 with MongoDB and Socket.io.")))
    .catch(error => console.log(error));
    