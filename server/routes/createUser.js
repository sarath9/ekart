const { User } = require('../models/user.model');
// const express = require('express');
// const router = express.Router();
// const bcrypt = require("bcryptjs");

// router.post('/', async (req, res) => {
//     console.log('called',req);
//     const { username, email, password } = req.body.signUpData;
//     const encryptpassword = await bcrypt.hash(password, 10);
//     // Check if this user already exisits
//     let user = await User.findOne({ email: req.body.email });
//     console.log(user,"user");
//     if (user) {
//         return res.status(400).send('That user already exisits!');
//     } else {
//         await User.create({ username, email, password: encryptpassword });
//         res.send({ status: "ok" }); 
//     }
// });
// module.exports = router;