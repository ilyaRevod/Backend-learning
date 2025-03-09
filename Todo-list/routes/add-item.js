import express from 'express';
const router = express.Router();

import db from './connect-db.js';

// new Date
function getDate() {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const date = new Date().getDay();
  return days[date];
};

// add new item
router.post('/', async (req, res) => {
  const newItem = req.body.newItem;
  await db.query('INSERT INTO items (title) VALUES ($1)', [newItem]);
  const result = await db.query('SELECT * FROM items');
  const items = result.rows;
  res.render('index', { listTitle: getDate(), listItems: items });
});

export default router;
