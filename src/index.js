const express = require('express');
const app = express();
const morgan = ('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 4600;


app.get('/', (req, res) => {
    res.send('Welcome to Auth API 2.0');
});

app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
   console.log(`Server is runnng on ${PORT}`);
});

module.exports = app


