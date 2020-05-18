const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

async function loadFeatureCollection(){
   const connection = await mongodb.MongoClient.connect(
      process.env.MONGODB_FEATURE_URI, { useNewUrlParser: true, useUnifiedTopology: true }
   )
   
   return connection.db(process.env.MONGODB_DATABASE).collection('Insta_Feature');
}

router.get('/', async (req, res) => {
   const db = await loadFeatureCollection();
   const result = await db.find().toArray();
   
   if(result){
      res.status(200).send(result[0])
   }
   else{
      res.status(500)
   }
});

module.exports = router;