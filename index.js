import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send('hello');
});

app.get("/api/bfhl", (req, res) => {
  const responseJSON = {"operation_code" : 1}
  res.send(responseJSON);
});

app.listen(port, () => {
  console.log(`example on port ${port}`);
})