// Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Use static files
app.use(express.static('public'));

// Use EJS
app.set('view engine', 'ejs');

// Use comments
app.use('/comments', require('./routes/comments'));

// Use home page
app.get('/', (req, res) => {
    res.render('index');
});

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
