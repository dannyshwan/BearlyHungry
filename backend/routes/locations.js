const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
   return res.status(200).send("successful location call")
});

module.exports = router;