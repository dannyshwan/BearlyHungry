const express = require('express');
const mongodb = require('mongodb');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
   return res.status(200).send("successful feature call")
});

module.exports = router;