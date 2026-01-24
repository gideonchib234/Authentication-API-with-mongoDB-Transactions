const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 4600;
const connectDB = require('./database/db');

connectDB();


app.get('/', (req, res) => {
    res.send('Welcome to Auth API 2.0');
});

app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
   console.log(`Server is runnng on port ${PORT}`);
});



module.exports = app;