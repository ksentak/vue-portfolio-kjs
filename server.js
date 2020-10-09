const express = require('expresss');
const app = express;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('./routes/nodemailer');
const port = process.env.PORT || 3000;
require('dotenv').config;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Nodemailer route
app.use('/', nodemailer);

// Production variable
const liveSite = 1;

// Heroku dev testing
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production build
	app.use(express.static('client/dist'));

	// Express serves up index.html file if it doesn't recognize route
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
