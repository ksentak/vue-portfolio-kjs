const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config');

const transport = {
	host: 'smtp.mail.yahoo.com',
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Nodemailer is ready...');
	}
});

router.post('/send', (req, res, next) => {
	let name = req.body.data.name;
	let email = req.body.data.email;
	let formSubject = req.body.data.subject;
	let message = req.body.data.message;
	let content = `Name: ${name} \n\nSubject: ${formSubject} \n\nEmail: ${email} \n\nMessage: ${message} `;

	const mail = {
		from: 'k.sentak@yahoo.com',
		to: 'keatonsentak@gmail.com',
		subject: 'New message from keatonsentak.dev contact form',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail',
			});
		} else {
			res.json({
				msg: 'success',
			});
		}
	});
});

module.exports = router;
