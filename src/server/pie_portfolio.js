const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5005;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "bms",
});

app.use(cors());
app.use(express.json()); // Parse JSON requests

// Define a GET route for /api/employees
app.get('/api/pie_portfolio', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('select d.portfolio_name as x,COUNT(*) AS y,(ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER ())) AS text from employee a inner join employee_project b on a.employee_id=b.employee_id inner join project c on b.project_id=c.project_id inner join portfolio d on c.portfolio_id = d.portfolio_id GROUP BY d.portfolio_name');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a POST route for /api/employees
app.post('/api/portfolio', async (req, res) => {
  try {
    const { query } = req.body;
    const client = await pool.connect();
    const result = await client.query(query);
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
