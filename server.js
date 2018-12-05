var express = require('express');
var app = express();

app.use(express.static('build'));

// Routes
app.get('/', function(req, res) {
   res.send('Hello World!');
});

// Listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}...`);
});
