const express = require('expresss');
const app = express;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('./routes/nodemailer');
const port = process.env.PORT || 8080;
require('dotenv').config;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
