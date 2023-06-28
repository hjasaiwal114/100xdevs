const express = require("express")
const app = express()
const port = 3000

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i<counter; i++) {
        sum = sum + i;
    }
    return sum;

}

function handleFirstRequest(req, res) {
    var calculateSum = calculateSum(100);
    console.log(calculateSum)
    var answer = "this sum is " + calculateSum;
    res.send(answer); 
}

app.get('/handleSum', handleFirstRequest)

function started() {
    console.log(` Example app listening on port ${port}`)
} 

app.listen(port, started)
 
 

// node pakage manager