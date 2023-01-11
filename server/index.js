const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

const mongourl = "mongodb+srv://suresh209:suresh209@ecartmongo.eoxwjwx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl, {
    useNewUrlParser: true
}).then(() => { console.log("connected to database") }).catch((e) => { console.log(e, "error") });

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.signUpData.password, 10);
        console.log(newPassword);
		await User.create({
			name: req.body.signUpData.username,
			email: req.body.signUpData.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.listen(5001, () => {
    console.log('Server started on 5001');
})