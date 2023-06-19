const fs = require("fs");
const express = require('express')
const app = express()
const port = 3000;

function calculateSum(counter) {
    let total = 0;
    for (let i = 0 ; i < counter ; i++) {
        total = total + i;
    } 
    return total;
}

function handleFirstRequest(req, res){
    let calcul
    res.send("hello t the 100x devs")
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})