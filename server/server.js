const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello form server')
})
app.post('/enroll', (req, res) => {
    console.log(req.body);
    res.status(401).send({"message": "Data Received"})
})
app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
})