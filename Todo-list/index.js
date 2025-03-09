import express from 'express';
import bodyParser from 'body-parser';

// routes
import homePage from './routes/home-page.js';
import addItem from './routes/add-item.js';
import deleteItem from './routes/delete-item.js';
import editItem from './routes/edit-item.js';

const app = express();
const PORT = 3300;

// static files
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

// use body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', homePage);

// add new item
app.use('/add', addItem);

// edit items
app.use('/edit', editItem);

// delete items
app.use('/delete', deleteItem);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});