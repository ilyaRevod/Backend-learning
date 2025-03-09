import express from 'express';
const router = express.Router();

import db from './connect-db.js';

// new Date
function getDate() {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const date = new Date().getDay();
  return days[date];
};

// home page 
router.get('/', async (req, res) => {
  const query = await db.query('SELECT * FROM items');
  const items = query.rows;
  res.render('index', { listTitle: getDate(), listItems: items });
});

export default router;
