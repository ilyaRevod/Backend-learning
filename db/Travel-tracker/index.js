import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const PORT = 3000;


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "db name",
  password: "your pw",
  port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


async function checkVisisted() {
  const result = await db.query("SELECT country FROM user_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
};


// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});


//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body.country;
  const result = await db.query(
    "SELECT country_code FROM visited_country WHERE country_name = $1", [input]
  );
  console.log(result);

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;
    await db.query("INSERT INTO user_countries (country) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
