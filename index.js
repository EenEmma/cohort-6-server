//import express
const express = require('express');
//cors
const cors = require ('cors');
//mongoose
const mongoose = require('mongoose')
mongoose.connect("mongdb://localhost:27017/AuthenticationDB")
.then (() => console.log("MongoDB connected"))
.catch(err => console.error("Connection Error: ", err))

//create express app
const app = express();
const port = 7777;
app.use(cors());
app.use(express.json())

app.get("/" , (req , res)=>{
  response.send("api is ready for use")
})

// Simulated in-memory database
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',   email: 'bob@example.com'   },
];

// GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET a single user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(el => el.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

app.post('/new-users', (req, res) => {
  const { name, email } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({
      error: 'Name and email are required',
    });
  }

  // Create new user object
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(newUser);

  // 201 Created = resource successfully created
  res.status(201).json(newUser);
});



app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`)
})