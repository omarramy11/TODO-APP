const express = require('express')
const mongoose = require('mongoose')
const tasksRoutes = require('./routers/taskRouter') 

const app = express()
const port = 3000

// midlleware
app.use(express.json())

// DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

const db = mongoose.connection;

// ERROR
db.on('error', () => 
{
    console.log ("Connection Error!!!");
}
)

// Run
db.once('open', () =>
{
    console.log("Connected To DB");
}
)

// to use endpoints (get - post ..) after connection of DB
app.use(tasksRoutes)



// run port listen
app.listen(port, () =>
{
    console.log('server Started on port 3000');
}
)
