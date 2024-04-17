import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fundcommunity",
});

app.get("/campaigns", (req, res) => {
  const q = "SELECT * FROM crowdfund";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/", (req, res) => {
  res.json("hello");
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL database");
  });
});

app.post("/campaigns", (req, res) => {
  const q =
    "INSERT INTO crowdfund(`username`,`title`, `description`, `image`, `goal`) VALUES (?)";

  const values = [
    req.body.username,
    req.body.title,
    req.body.description,
    req.body.image,
    req.body.goal,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/campaigns/:title", (req, res) => {
  const title = req.params.title;
  const q = " DELETE FROM crowdfund WHERE title = ? ";

  db.query(q, [title], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/campaigns/:title", (req, res) => {
  const title = req.params.title;
  const q =
    "UPDATE crowdfund SET `description`= ?, `image`= ?, `goal`= ? WHERE title = ?";

  const values = [req.body.description, req.body.image, req.body.goal];

  db.query(q, [...values, title], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("Connected to backend.");
});
