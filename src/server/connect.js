// const {Client} =require('pg')
// const client = new Client({
//     host:"localhost",
//     user:"postgres",
//     port:5432,
//     password:"",
//     database:"bms",
// })
// client.connect();

// client.query(`Select * from employee`,(err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
 
// })
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5002;

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
app.get('/api/employees', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM employee');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a POST route for /api/employees
app.post('/api/employees', async (req, res) => {
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
