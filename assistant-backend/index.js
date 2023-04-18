require('dotenv').config();
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())


var db = mysql.createConnection({
  user : process.env.USERDB,
  password : process.env.PASSWORD,
  host : process.env.HOST,
  database : process.env.DATABASE
});

// ***** GOALS *****

app.post("/createGoals", (req, res) => {
  const goals = req.body.goals
  const deadline = req.body.deadline
  const notes = req.body.notes


  db.query(
    "INSERT INTO goals (goals, deadline, notes) VALUES (?,?,?)",
    [goals, deadline, notes],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  )
})

app.get("/goals", (req, res) => {
  db.query("SELECT * FROM goals", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id
  db.query("DELETE FROM goals WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

// ***** EVENTS *****

app.post("/createEvents", (req, res) => {
  const events = req.body.events



  db.query(
    "INSERT INTO events (events) VALUES (?)",
    [events],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  )
})

app.get("/events", (req, res) => {
  db.query("SELECT * FROM events", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})
