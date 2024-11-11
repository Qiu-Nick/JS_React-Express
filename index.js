import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/employees", (req, res) => {
  res.json({ results: [sampleEmployee] });
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});