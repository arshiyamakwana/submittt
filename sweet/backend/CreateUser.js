const express = require('express');
const router = express.Router();
const User = require('../models/User'); // model
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
router.post('/createuser', async (req, res) => {
    const error = validationResult(req);
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

router.post('/loginuser', async (req, res) => {
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "try loging with correct crednetial " })
        }

        if (!req.body.password !== userData.password) {
            return res.status(400).json({ errors: "try login with correct cred" });
        }
        return res.json({ success: true })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }

})

module.exports = router;
