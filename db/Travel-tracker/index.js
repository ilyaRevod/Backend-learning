import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const PORT = 3000;


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "db name",
  password: "your pwd",
  port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


// GET home page
app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_country");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", { countries: countries, total: countries.length });
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
