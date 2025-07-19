const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reportRoutes = require('./routes/reports');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the FixMyRoad API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});