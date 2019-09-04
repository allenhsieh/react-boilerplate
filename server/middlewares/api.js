const express = require('express');
const router = express.Router();

const data = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Integer nec odio',
  'Praesent libero',
  'Sed cursus ante dapibus diam',
  'Sed nisi',
  'Nulla quis sem at nibh elementum imperdiet',
  'Duis sagittis ipsum',
  'Praesent mauris',
  'Fusce nec tellus sed augue semper porta',
  'Mauris massa',
];

router.get('/data', (req, res) => {
  res.send(data);
});

router.post('/data', (req, res) => {
  data.unshift(req.body.data);
  res.send(data);
});
module.exports = router;
