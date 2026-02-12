const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const PASSWORD = 'asd';


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.get('/encode/:message', (req, res) => {
  const encodeText = req.params.message;
  const encoded = Vigenere.Cipher(PASSWORD).crypt(encodeText);
  res.send(encoded);
});

app.get('/decode/:message', (req, res) => {
  const decodeText = req.params.message;
  const decoded = Vigenere.Decipher(PASSWORD).crypt(decodeText);
  res.send(decoded);
});

app.get('/:text', (req, res) => {
  const text = req.params.text;
  res.send(text);
});

