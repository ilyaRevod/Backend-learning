const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");


router.get('/', (req, res) => {
  res.render('edit');
});


router.post('/', (req, res) => {
  // user post
  const { title } = req.body;
  // user edit post
  const { newTitle, newContent } = req.body;
  const blogsPath = path.join(__dirname, '..', 'blogs', 'blogs.json');
  let blogs = JSON.parse(fs.readFileSync(blogsPath, "utf8"));
  // checking
  const exists = blogs.some(blog => blog.title === title);
  if (!exists) {
    res.send("Does not Exists!");
  } else {
    // search for user post
    const blogByTitle = blogs.find(blog => blog.title === title);
    if (blogByTitle) {
      const title = newTitle;
      const content = newContent;
      blogByTitle.title = title;
      blogByTitle.content = content;
      fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), "utf8");
      res.render('blog', { title, content });
    }
  }
});


module.exports = router;