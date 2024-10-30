const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configure EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images if needed)
app.use(express.static('public'));

// Root route to render the form
app.get('/', (req, res) => {
    res.render('index');
});

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('result', { name, email });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
