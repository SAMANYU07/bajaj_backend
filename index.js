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
const numbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
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
  console.log("recieved data: ", data);
  // const allNo = data["data"].filter(elem => parseInt(isDigitString(elem)));
  // const allAlpha = data["data"].filter(elem => alphabets.includes(elem));
  let allAlpha = [];
  let allNo = [];
  let highestAlpha = "";
  data["data"].map(elem => {
    if (alphabets.includes(elem.toUpperCase()))
      allAlpha.push(elem);
    if (isDigitString(elem))
      allNo.push(elem);
    if (alphabets.includes(elem.toUpperCase()) && elem.toUpperCase() > highestAlpha.toUpperCase())
      highestAlpha = elem;
  })
  // res.send(req.body)
  // console.log(allNo);
  res.json({
    is_success: true,
    "user_id": "samanyu_vyas_10092003",
    "email": "sn8319@srmist.edu.in",
    "roll_number": "RA2111003020269",
    "numbers": allNo,
    "alphabets": allAlpha,
    "highest_alphabet": highestAlpha,
  })
})

app.listen(port, () => {
  console.log(`example on port ${port}`);
})