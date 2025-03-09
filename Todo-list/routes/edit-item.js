import express from 'express';
const router = express.Router()

import db from './connect-db.js';

// new Date
function getDate() {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const date = new Date().getDay();
  return days[date];
};

// home page 
router.post('/', async (req, res) => {
  const { updatedItemId, updatedItemTitle } = req.body;
  await db.query('UPDATE items SET title = $1 WHERE id = $2', [updatedItemTitle, updatedItemId]);
  const query = await db.query('SELECT * FROM items');
  const items = query.rows;
  res.render('index', { listTitle: getDate(), listItems: items });
});

export default router;
