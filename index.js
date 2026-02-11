const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/:text', (req, res) => {
  const text = req.params.text;
  res.send(text);
});

