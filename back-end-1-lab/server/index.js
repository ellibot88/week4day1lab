const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/hello', (req, res) =>{
    res.status(200).send('<h1>Hello World</h1>')
})

app.get('/api/users', (req,res) =>{
    let friends = ['Ethan','Elliott','Noah','Ben','Kevin']
    res.status(200).send(friends)
})

app.get('/weather/:temperature',(req,res) =>{
    const { temperature } = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase)
})

app.listen(4000, () => console.log("Server running on port 4000"));