import express from 'express';
import 'dotenv/config';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const alphabets = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const isDigitString = (str) => /^\d+$/.test(str);

app.get("/", (req, res) => {
  res.send('hello');
});

app.get("/api/bfhl", (req, res) => {
  const responseJSON = {"operation_code" : 1}
  res.send(responseJSON);
});

app.post("/api/bfhl", (req, res) => {
  const data = req.body;
  console.log("recieved data: ", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // res.send(req.body)
  res.json({message: "recieved", recievedData: data})
})

app.listen(port, () => {
  console.log(`example on port ${port}`);
})