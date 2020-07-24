const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.send({ express: 'teste pulse digital' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));