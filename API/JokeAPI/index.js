import express from 'express';
import axios from 'axios';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(morgan('tiny'))
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
  try {
    const result = await axios.get('https://v2.jokeapi.dev/joke/Any');
    res.render('index', { data: result.data });
  } catch {
    console.log('!Error');
  }
});


app.post('/', async (req, res) => {
  const category = req.body.category;
  try {
    const result = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);
    res.render('index', { data: result.data });
  } catch {
    console.log('!Error, POST');
  }
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});