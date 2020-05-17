const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const feature = require('./routes/feature');
const locations = require('./routes/locations');

// Middleware
app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use('/api/feature', feature);
app.use('/api/locations', locations);

// Check if server is running
app.get('/ping', (req, res) => {
   res.set('text/plain').status(200).send('pong');
});

// Fallback 404 response
app.get('*', (req, res) => {
   res.status(404).json({ isSuccess: false, error: 'The specified URI is unknown for the REST service.' });
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server started on port ${port}`));