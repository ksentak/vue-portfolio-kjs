const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const nodemailer = require('./routes/nodemailer');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Nodemailer route
app.use('/', nodemailer);

// Production variable
// const liveSite = 1;

// Heroku production
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));

	// Express serves up index.html file if it doesn't recognize route
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});
}

// Live production
// if (liveSite == 1) {
// 	// Express will serve up production assets
// 	app.use(express.static('client/build'));

// 	// Express serves up index.html file if it doesn't recognize route
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
// 	});
// }

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
