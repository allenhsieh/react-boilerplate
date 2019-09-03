const express = require('express');
const router = express.Router();

const data = ['hello', 'world', 'testing'];

router.get('/data', (req, res) => {
  res.send(data);
});

router.post('/data', (req, res) => {
  data.unshift(req.body.data);
  res.send(data);
});
module.exports = router;
