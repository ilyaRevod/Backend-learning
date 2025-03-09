import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "DB name",
  password: "your pg admin password",
  port: 5432,
});

db.connect();

export default db;
